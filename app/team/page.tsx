"use client";

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const teamMembers = [
    {
        name: "Charlie Zhai",
        role: "Business Partner",
        image: "/1.jpg",
        bio: "An entrepreneur at heart and always up for a new challenge. I’ve built several businesses, from an online tailor shop (SuitMySize.com) to an oriental noodle bar (NoodleExpress). I love innovation, fresh ideas, and turning them into reality."
    },
    {
        name: "Leo Li",
        role: "Project Lead",
        image: "/2.jpg",
        bio: "A dedicated Master’s student in Entrepreneurship at UCL, I am passionate about leveraging modern technological innovations to create meaningful impact in the world. With a combination of assertiveness and charisma, I strive to inspire others and drive positive change through my work in the entrepreneurial space. "
    },
    {
        name: "Moin Chalkoo",
        role: "Tech Lead / Software Engineer",
        image: "/3.jpg",
        bio: "Currently pursuing a Master’s in Artificial Intelligence and Machine Learning, I am passionate about leveraging technology to drive meaningful impact.  My focus lies at the intersection of technology and community. With a strong foundation in product management, I bring a strategic approach to technology leadership, ensuring that innovation is both effective and accessible."
    },
    // {
    //     name: "Akins",
    //     role: "Marketing Lead",
    //     image: "/4.jpg",
    //     bio: "An experienced analyst with a Master's degree in Management from Essex Business School, an expert on business development acumen with expertise in regulatory frameworks. With a solid background in financial service.I have experience in compliance and regulatory risk management.I am seasoned professional with over 5 years in the financial service sector."
    // },
];

export default function TeamPage() {
    const [ selectedMember, setSelectedMember ] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />

            {/* Hero Section */ }
            <section className="relative bg-gradient-to-b from-gray-200 to-gray-50 text-gray-900 pt-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold">
                        Meet the <span className="text-blue-600">Laundroark</span> Team
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-600">
                        A group of experts dedicated to bringing next-generation digital laundry solutions.
                    </p>
                </div>
            </section>

            {/* Team Section */ }
            <section className="pb-16 pt-6 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
                        Our team consists of innovative thinkers, engineers, and entrepreneurs focused on transforming the industry.
                    </p>

                    {/* Team Grid */ }
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center">
                        { teamMembers.map((member, index) => (
                            <motion.div
                                key={ index }
                                className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                                whileHover={ { scale: 1.05 } }

                            >
                                {/* Profile Image */ }
                                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-300">
                                    <Image
                                        src={ member.image }
                                        alt={ member.name }
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>

                                {/* Name & Role */ }
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">{ member.name }</h3>
                                <p className="text-gray-600 text-sm">{ member.role }</p>

                                {/* Read Bio Button */ }
                                <button
                                    //@ts-ignore
                                    onClick={ () => setSelectedMember(member) }
                                    className="mt-4 bg-blue-600 cursor-pointer text-white text-sm font-semibold px-5 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
                                >
                                    Read Bio
                                </button>
                            </motion.div>
                        )) }
                    </div>
                </div>
            </section>

            {/* Modal for Bio with Animation */ }
            <AnimatePresence>
                { selectedMember && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center px-4 md:px-0 bg-black/70 z-50"
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
                            initial={ { scale: 0.8, opacity: 0 } }
                            animate={ { scale: 1, opacity: 1 } }
                            exit={ { scale: 0.8, opacity: 0 } }
                            transition={ { duration: 0.3, ease: "easeOut" } }
                        >
                            <button
                                className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-800"
                                onClick={ () => setSelectedMember(null) }
                            >
                                ✖
                            </button>
                            <div className="text-center">
                                <Image
                                    //@ts-ignore
                                    src={ selectedMember.image }
                                    //@ts-ignore
                                    alt={ selectedMember.name }
                                    width={ 150 }
                                    height={ 150 }
                                    className="mx-auto rounded-full border-4 border-gray-300"
                                />
                                {/* @ts-ignore */ }
                                <h2 className="text-2xl font-bold mt-4">{ selectedMember.name }</h2>
                                {/* @ts-ignore */ }
                                <p className="text-gray-600 text-lg">{ selectedMember.role }</p>
                                {/* @ts-ignore */ }
                                <p className="text-gray-700 mt-2">{ selectedMember.bio }</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ) }
            </AnimatePresence>
        </div>
    );
}
