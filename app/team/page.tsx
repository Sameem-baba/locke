"use client"

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";

const teamMembers = [
    {
        name: "Charlie Zhai",
        role: "Business Partner",
        image: "/1.jpg",
        bio: "I’m Charlie Zhai—an entrepreneur at heart and always up for a new challenge. I’ve built several businesses, from an online tailor shop (SuitMySize.com) to an oriental noodle bar (NoodleExpress). I love innovation, fresh ideas, and turning them into reality."
    },
    {
        name: "Leo Li",
        role: "Project Lead",
        image: "/2.jpg",
        bio: "Olive leads the customer success team with a passion for enhancing user experience and satisfaction."
    },
    {
        name: "Moin Chalkoo",
        role: "Tech Lead / Software Engineer",
        image: "/3.jpg",
        bio: "Moin drives technological innovation, bringing cutting-edge solutions to the company’s tech stack."
    },
    {
        name: "Akins",
        role: "Marketing Lead",
        image: "/4.jpg",
        bio: "Jessica creates stunning UI/UX designs that enhance brand identity and user experience."
    },
];

function TeamPage() {
    const [ selectedMember, setSelectedMember ] = useState(null);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />

            {/* Section Wrapper */ }
            <section className="flex pt-24 md:pt-0 min-h-screen w-full justify-center items-center relative px-6">
                <div className="container mx-auto text-center relative z-10">
                    {/* Heading */ }
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-gray-900">
                        Meet <span className="text-black">Our</span> Team
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                        Our philosophy is simple: hire great people and give them the resources and support to do their best work.
                    </p>

                    {/* Team Grid */ }
                    <div className="flex justify-center items-center w-full">
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            { teamMembers.map((member, index) => (
                                <div
                                    key={ index }
                                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105"
                                    //@ts-ignore
                                    onClick={ () => setSelectedMember(member) }
                                >
                                    <div className="relative w-[250px] h-[300px] mx-auto overflow-hidden rounded-lg">
                                        <Image
                                            src={ member.image }
                                            alt={ member.name }
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="center"
                                            className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Overlay for Text */ }
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent p-4">
                                        <h3 className="font-semibold text-white">{ member.name }</h3>
                                        <p className="text-gray-300 text-sm">{ member.role }</p>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */ }
            { selectedMember && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
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
                                // @ts-ignore
                                alt={ selectedMember.name }
                                width={ 150 }
                                height={ 150 }
                                className="mx-auto rounded-full"
                            />
                            {/* @ts-ignore */ }

                            <h2 className="text-2xl font-bold mt-4">{ selectedMember.name }</h2>
                            {/* @ts-ignore */ }
                            <p className="text-gray-600 text-lg">{ selectedMember.role }</p>
                            {/* @ts-ignore */ }

                            <p className="text-gray-700 mt-2">{ selectedMember.bio }</p>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
}

export default TeamPage;
