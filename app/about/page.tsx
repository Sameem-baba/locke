"use client"
import Header from "@/components/Header";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

function AboutUsPage() {
    // Function to handle smooth scrolling
    const handleScrollToSection = () => {
        const section = document.getElementById("about-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />

            {/* Hero Section with Video Background */ }
            <section className="relative w-full min-h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/bgvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */ }
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6 text-center text-white">
                    <div>
                        <h1 className="text-3xl md:text-6xl font-bold">
                            We are Laundroark
                        </h1>
                        <p className="mt-4 text-sm md:text-2xl max-w-lg md:max-w-3xl mx-auto leading-relaxed">
                            Our mission is to transform laundry services with smart technology, automation, and AI-driven solutions for seamless efficiency and customer convenience.
                        </p>
                        <button
                            onClick={ handleScrollToSection }
                            className="rounded-md bg-indigo-600 px-5 py-2.5 text-lg font-semibold text-white shadow-md hover:bg-indigo-500 transition duration-300 mt-5"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Scroll Down Indicator */ }
                <button
                    onClick={ handleScrollToSection }
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
                >
                    <ChevronDownIcon className="w-10 h-10 text-white" />
                </button>
            </section>

            {/* About Us Section */ }
            <section id="about-section" className="py-16 max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-gray-900">
                        About Us
                    </h1>
                </div>

                {/* Content Grid */ }
                <div className="mt-10 grid grid-cols-1 text-center md:grid-cols-12 gap-10">
                    <div className="md:col-start-3 md:col-span-8 text-lg text-gray-700 leading-relaxed">
                        <p>
                            At Laundroark, we are dedicated to revolutionizing the laundry industry by integrating smart technology, automation, and AI-driven solutions. Our goal is to empower businesses to maximize efficiency, enhance customer convenience, and thrive in the digital age.
                        </p>
                        <p className="mt-6">
                            Our robust technology development team, consisting of software and mechanical engineers, is committed to developing cutting-edge digital platforms and smart locker systems. Through our innovative technology, we are enhancing the way businesses manage and operate their laundry services.
                        </p>
                        <p className="mt-6">
                            Currently in the market exploration phase, we are refining our solutions to ensure seamless integration for laundry providers of all sizes. Our smart lockers and AI-powered logistics are designed to optimize operations, increase profitability, and deliver a superior customer experience.
                        </p>
                        <p className="mt-6">
                            By leveraging real-time analytics, user-centric design, and industry insights, we are continuously innovating to create a future where digital laundry solutions are the standard, not the exception. Join us in shaping the next generation of laundry services.
                        </p>
                    </div>
                </div>
            </section>


            {/* CTA Section */ }
            <section className="w-full flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto border-t py-10 px-6 border-gray-400">
                <p className="text-black font-extrabold text-2xl md:text-3xl text-center md:text-left">
                    Meet the innovators behind Laundroark.<br className="hidden md:block" />
                    Transforming the laundry industry with smart technology.
                </p>
                <Link href="/team">
                    <button className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0096ff] hover:to-[#0057ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 transition duration-300">
                        Meet Our Team
                    </button>
                </Link>
            </section>
        </div>
    );
}

export default AboutUsPage;
