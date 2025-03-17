/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

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
        image: "/moin.jpg",
        bio: "Currently pursuing a Master’s in Artificial Intelligence and Machine Learning, I am passionate about leveraging technology to drive meaningful impact. With a strong foundation in product management, I bring a strategic approach to technology leadership, ensuring that innovation is both effective and accessible. My focus lies at the intersection of technology and community, where I strive to integrate cutting-edge advancements with real-world applications that foster positive change."
    },
    {
        name: "Akins",
        role: "Marketing Lead",
        image: "/4.jpg",
        bio: "Jessica creates stunning UI/UX designs that enhance brand identity and user experience."
    },
];


export default function TeamPage() {
    const [ selectedMember, setSelectedMember ] = useState(null);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />

            {/* Section Wrapper */ }
            <section className="flex pt-24 pb-10 md:pb-0 md:pt-0 min-h-screen w-full justify-center items-center relative px-6">
                <div className="container mx-auto text-center relative z-10">
                    {/* Heading */ }
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-gray-900">
                        Meet Our <span className="text-blue-600">Team</span>
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                        A passionate team of experts dedicated to revolutionizing the industry with smart technology.
                    </p>

                    {/* Team Grid */ }
                    <div className="grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center mt-12">
                        { teamMembers.map((member, index) => (
                            <div
                                key={ index }
                                className="flex flex-col items-center text-center cursor-pointer "
                                // @ts-ignore
                                onClick={ () => setSelectedMember(member) }
                            >
                                {/* Profile Image */ }
                                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-gray-300">
                                    <Image
                                        src={ member.image }
                                        alt={ member.name }
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>

                                {/* Name & Role */ }
                                <h3 className="mt-4 text-lg font-semibold text-gray-900">{ member.name }</h3>
                                <p className="text-gray-600 text-sm">{ member.role }</p>

                                {/* Read Bio Button */ }
                                <button className="mt-4 bg-black cursor-pointer text-white text-sm font-semibold px-5 py-2 rounded-md shadow-md hover:bg-gray-800 transition">
                                    Read Bio
                                </button>
                            </div>
                        )) }
                    </div>
                </div>
            </section>

            {/* Modal for Bio with Animation */ }
            <AnimatePresence>
                { selectedMember && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center px-4 md:px-0 bg-black/70 z-50"
                        initial={ { opacity: 0 } } // Start transparent
                        animate={ { opacity: 1 } } // Fade in
                        exit={ { opacity: 0 } } // Fade out
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
                            initial={ { scale: 0.8, opacity: 0 } } // Start small
                            animate={ { scale: 1, opacity: 1 } } // Grow to normal
                            exit={ { scale: 0.8, opacity: 0 } } // Shrink when closing
                            transition={ { duration: 0.3, ease: "easeOut" } } // Smooth transition
                        >
                            <button
                                className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-800"
                                onClick={ () => setSelectedMember(null) }
                            >
                                ✖
                            </button>
                            <div className="text-center">
                                <Image
                                    // @ts-ignore
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
