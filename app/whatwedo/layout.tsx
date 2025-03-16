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
    title: "Laundroark | What We Do",
    description: "We are designing a comprehensive digital platform to enhance management and operations within the laundry business. Our initiative includes the development of an innovative customer interface, allowing users to interact seamlessly through a mobile app or website. By implementing digitally controlled lockers and a sophisticated delivery management system, we aim to revolutionize the laundry service experience, making it more convenient and efficient. This project represents a significant step towards modernizing traditional laundry services through cutting-edge technology.",
};

export default function WhatWeDoLayout({
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
