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
    title: "Locke | Book A Trial",
    description: "By booking a demo, you'll experience first-hand how our cutting-edge digital platform transforms the laundry industry. Developed in collaboration with technology experts and industry leaders, our AI-powered system and smart lockers optimize operations, enhance customer convenience, and maximize profitability. Our intuitive, globally adaptable interface enables businesses to manage orders, track logistics, and streamline services effortlessly—all at the click of a button. 🚀",
};

export default function BookATrialLayout({
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
