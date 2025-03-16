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
    title: "Locke | About",
    description: "At Laundroark, we take pride in our diverse and accomplished team of professionals committed to delivering tailored solutions for your business. Our robust technology development team, consisting of approximately 50 skilled software and mechanical engineers, is dedicated to developing our digital platform and the accompanying locker systems. We are excited to be in the market exploration phase and are eager to help enhance your business through our innovative technology. ",
};

export default function AboutUsLayout({
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
