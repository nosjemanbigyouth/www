import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
    title: "Nosjeman Bigyouth | Official Website",
    description: "Official website of I.IZHIA - Dancehall Artist. Stream music, watch videos, and stay updated with the latest releases.",
    keywords: ["Nosjeman Bigyouth", "Dancehall", "Music", "Artist", "Dutch", "Reggae"],
    openGraph: {
        title: "Nosjeman Bigyouth | Official Website",
        description: "Official website of Nosjeman Bigyouth - Dancehall Artist",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nosjeman Bigyouth | Official Website",
        description: "Official website of Nosjeman Bigyouth - Dancehall Artist",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="antialiased" suppressHydrationWarning>
                <ClientBody>{children}</ClientBody>
            </body>
        </html>
    );
}
