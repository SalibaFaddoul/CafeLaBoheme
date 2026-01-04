import type { Metadata } from "next";
import { Lora, Outfit } from "next/font/google";
import "./globals.css";

const lora = Lora({
    variable: "--font-lora",
    subsets: ["latin"],
    style: ["normal", "italic"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cafe La Boheme San Francisco",
    description: "The Soul of the Mission",
    icons: {
        icon: '/LabohemeFavicon.jpg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${lora.variable} ${outfit.variable} antialiased`}>{children}</body>
        </html>
    );
}
