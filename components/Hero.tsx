"use client";

import Link from "next/link";

function Hero() {
    // Function to handle smooth scrolling
    const handleScrollToSection = () => {
        const section = document.getElementById("growingchallenge");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-screen isolate  px-6 lg:px-8">
            {/* Background Video */ }
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-screen h-full object-cover"
            >
                <source src="/herovideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay for Readability */ }
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content Box */ }
            <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-gray-100 sm:text-7xl">
                        A next-gen technology solution to digitize your business.
                    </h1>
                    <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
                        Smart laundry, smart locker, and seamless service bring bigger profits.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/contact"
                            className="rounded-md uppercase tracking-wider bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-400 transition duration-300"
                        >
                            Contact us
                        </Link>
                        <button
                            onClick={ handleScrollToSection }
                            className="text-sm uppercase cursor-pointer tracking-wider font-semibold text-white hover:text-gray-300 transition duration-300"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
