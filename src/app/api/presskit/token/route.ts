import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

const BLOB_API_URL = "https://vercel.com/api/blob";
const MAX_PRESSKIT_BYTES = 500 * 1024 * 1024; // 500 MB direct-to-blob limit

function parseStoreIdFromReadWriteToken(token: string): string {
    const parts = token.split("_");
    return parts[3] || "";
}

function sanitizeFilename(filename: string): string {
    const base = filename.split(/[/\\]/).pop() || "presskit.pdf";
    return base
        .toLowerCase()
        .replace(/[^a-z0-9._-]/g, "-")
        .replace(/-+/g, "-");
}

function createClientToken(params: {
    readWriteToken: string;
    pathname: string;
    maximumSizeInBytes: number;
    validUntil: number;
}): string {
    const storeId = parseStoreIdFromReadWriteToken(params.readWriteToken);
    if (!storeId) {
        throw new Error("Ongeldige BLOB_READ_WRITE_TOKEN configuratie.");
    }

    const payload = Buffer.from(
        JSON.stringify({
            pathname: params.pathname,
            access: "public",
            addRandomSuffix: true,
            allowOverwrite: true,
            maximumSizeInBytes: params.maximumSizeInBytes,
            validUntil: params.validUntil,
        }),
    ).toString("base64");

    const signature = crypto
        .createHmac("sha256", params.readWriteToken)
        .update(payload)
        .digest("hex");

    const inner = Buffer.from(`${signature}.${payload}`).toString("base64");
    return `vercel_blob_client_${storeId}_${inner}`;
}

async function verifyGitHubWriteAccess(githubToken: string, repo: string): Promise<boolean> {
    if (!githubToken || !repo || !/^[\w.-]+\/[\w.-]+$/.test(repo)) {
        return false;
    }

    const res = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${githubToken}`,
            "X-GitHub-Api-Version": "2022-11-28",
        },
        cache: "no-store",
    });

    if (!res.ok) return false;
    const data = await res.json();
    return Boolean(data?.permissions?.push || data?.permissions?.admin || data?.permissions?.maintain);
}

export async function POST(request: NextRequest) {
    try {
        const readWriteToken = process.env.BLOB_READ_WRITE_TOKEN;
        if (!readWriteToken) {
            return NextResponse.json(
                { error: "BLOB_READ_WRITE_TOKEN ontbreekt in de serveromgeving." },
                { status: 500 },
            );
        }

        const body = await request.json();
        const filename = typeof body?.filename === "string" ? body.filename : "";
        const size = typeof body?.size === "number" ? body.size : 0;
        const githubToken = typeof body?.githubToken === "string" ? body.githubToken.trim() : "";
        const repo = typeof body?.repo === "string" ? body.repo.trim() : "nosjemanbigyouth/www";

        if (!filename) {
            return NextResponse.json({ error: "Bestandsnaam ontbreekt." }, { status: 400 });
        }

        if (size > MAX_PRESSKIT_BYTES) {
            return NextResponse.json(
                { error: "Bestand is groter dan het maximum van 500 MB." },
                { status: 400 },
            );
        }

        // In production, require valid GitHub push access so anonymous visitors cannot upload to the Blob store.
        if (process.env.NODE_ENV === "production") {
            const authorized = await verifyGitHubWriteAccess(githubToken, repo);
            if (!authorized) {
                return NextResponse.json(
                    { error: "Niet geautoriseerd. Log eerst in met je GitHub Key in het CMS." },
                    { status: 401 },
                );
            }
        }

        const cleanName = sanitizeFilename(filename);
        const pathname = `presskit/${cleanName}`;
        const validUntil = Date.now() + 5 * 60 * 1000; // 5 minutes for large uploads

        const clientToken = createClientToken({
            readWriteToken,
            pathname,
            maximumSizeInBytes: MAX_PRESSKIT_BYTES,
            validUntil,
        });

        return NextResponse.json({
            clientToken,
            pathname,
            uploadUrl: `${BLOB_API_URL}/?pathname=${encodeURIComponent(pathname)}`,
        });
    } catch (err: any) {
        console.error("Presskit token error:", err);
        return NextResponse.json(
            { error: err?.message || "Kon geen uploadtoken aanmaken." },
            { status: 500 },
        );
    }
}
