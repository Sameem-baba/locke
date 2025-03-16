import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: [ "latin" ],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: [ "latin" ],
});

export const metadata: Metadata = {
    title: "Laundroark | Team",
    description: "Our philosophy is simple: hire great people and give them the resources and support to do their best work.",
};

export default function TeamLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div >
            <div
                className={ `${geistSans.variable} ${geistMono.variable} antialiased` }
            >
                { children }
            </div>
        </div>
    );
}
