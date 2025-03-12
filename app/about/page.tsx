"use client"
import Header from "@/components/Header";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

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
                            We are Curenetics
                        </h1>
                        <p className="mt-4 text-sm md:text-2xl max-w-lg md:max-w-3xl mx-auto leading-relaxed">
                            It is our mission to accurately predict treatment responses for cancer patients using powerful AI technology.
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
                            Curenetics brings together a diverse team of industry-leading specialists. Collaboration is central to our approach, combining the capabilities of practicing clinicians, AI engineers, data scientists, cancer biologists, and immunologists to tackle this single complex challenge.
                        </p>
                        <p className="mt-6">
                            Fundamental to our research is access to high-quality existing data sets. We gather and analyze patient genomics, imaging profiles, and clinical information from hospitals and labs, developing AI models that can layer these markers to produce uniquely accurate results.
                        </p>
                        <p className="mt-6">
                            Currently at the Proof-of-Concept stage, our model will integrate into established health systems to give patients and doctors a reliable, accurate, and cost-effective tool to make informed choices about cancer treatment options.
                        </p>
                        <p className="mt-6">
                            Curenetics also has a pipeline of AI-driven projects currently at the discovery stage, which include the diagnosis of oral cancer and the prediction of stem cell transplant rejection.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */ }
            <section className="w-full flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto border-t py-10 px-6 border-gray-400">
                <p className="text-black font-extrabold text-2xl md:text-3xl text-center md:text-left">
                    Meet the minds behind Curenetics.<br className="hidden md:block" />
                    Join us in the fight against cancer.
                </p>
                <a href="/team">
                    <button className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0096ff] hover:to-[#0057ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 transition duration-300">
                        Meet Our Team
                    </button>
                </a>
            </section>
        </div>
    );
}

export default AboutUsPage;
