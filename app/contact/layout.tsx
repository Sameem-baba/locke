import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: [ "latin" ],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: [ "latin" ],
});

export const metadata: Metadata = {
    title: "Laundroark | Contact",
    description: "",
};

export default function ContactLayout({
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
                <Toaster />

            </div>
        </div>
    );
}
