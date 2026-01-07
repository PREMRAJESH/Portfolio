import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "P.R.S",
    description: "Software Engineering student passionate about building real-world impactful software in AI, Web Development, Cloud, and Blockchain.",
    keywords: ["P.R.S", "Software Engineer", "Web Developer", "AI", "Machine Learning", "Cloud", "Blockchain", "Portfolio"],
    authors: [{ name: "P.R.S" }],
    openGraph: {
        title: "P.R.S",
        description: "Software Engineering student passionate about building impactful software",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "P.R.S",
        description: "Software Engineering student passionate about building impactful software",
    },
    icons: {
        icon: "/icon.png",
        shortcut: "/icon.png",
        apple: "/icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={`${inter.className} antialiased custom-scrollbar`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
