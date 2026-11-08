import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return NextResponse.json(
                { error: "Geen bestand ontvangen." },
                { status: 400 }
            );
        }

        // Sanitize filename: remove spaces and special characters
        const originalName = file.name || "upload.jpg";
        const ext = path.extname(originalName).toLowerCase() || ".jpg";
        const baseName = path
            .basename(originalName, ext)
            .toLowerCase()
            .replace(/[^a-z0-9_-]/g, "-")
            .replace(/-+/g, "-");
        
        const timestamp = Date.now().toString().slice(-6);
        const fileName = `${baseName}-${timestamp}${ext}`;

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Ensure public/img directory exists
        const imgDir = path.join(process.cwd(), "public", "img");
        await fs.mkdir(imgDir, { recursive: true });

        // Save file
        const filePath = path.join(imgDir, fileName);
        await fs.writeFile(filePath, buffer);

        const publicUrl = `/img/${fileName}`;

        return NextResponse.json({
            success: true,
            url: publicUrl,
            fileName: fileName,
        });
    } catch (err: any) {
        console.error("Upload error:", err);
        return NextResponse.json(
            { error: "Upload mislukt: " + (err.message || "Onbekende fout") },
            { status: 500 }
        );
    }
}
