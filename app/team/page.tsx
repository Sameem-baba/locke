import Header from "@/components/Header";
import Image from "next/image";

const teamMembers = [
    { name: "Camilla Wilson", role: "Payment Gateway Support", image: "/1.jpg" },
    { name: "Olive Nacelle", role: "VP of Customer Success", image: "/2.jpg" },
    { name: "Moin Chalkoo", role: "CTO", image: "/3.jpg" },
    { name: "Jessica Dobrev", role: "Lead Designer", image: "/4.jpg" },
];

function TeamPage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />

            {/* Section Wrapper */ }
            <section className="flex min-h-screen w-full justify-center items-center relative px-6">
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
                                <div key={ index } className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
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
        </div>
    );
}

export default TeamPage;
