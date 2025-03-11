import Header from "@/components/Header";
import Image from "next/image";

const teamMembers = [
    { name: "Camilla Wilson", role: "Payment Gateway Support", image: "/1.jpg" },
    { name: "Olive Nacelle", role: "VP of Customer Success", image: "/2.jpg" },
    { name: "Sophie Chamberlain", role: "Specialized Support", image: "/3.jpg" },
    { name: "Jessica Dobrev", role: "Payments Support", image: "/4.jpg" },
];

function TeamPage() {
    return <div className="">
        <Header />

        <section className="bg-white mt-36  relative">
            {/* Background Grid */ }
            {/* <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-cover opacity-10"></div> */ }

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl font-bold uppercase tracking-wider text-gray-900">
                    Meet <span className="text-black">our</span> beautiful team
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Our philosophy is simple: hire great people and give them the resources and support to do their best work.
                </p>

                {/* Buttons */ }
                {/* <div className="mt-6 flex justify-center gap-4">
                    <button className="border border-gray-800 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-100">
                        🎥 Book a demo
                    </button>
                    <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
                        Get in touch
                    </button>
                </div> */}

                {/* Team Grid */ }
                <div className="flex  justify-center items-center w-full">
                    <div className="mt-12 grid grid-cols-1 max-w-7xl mx-auto justify-between sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        { teamMembers.map((member, index) => (
                            <div key={ index } className="relative group overflow-hidden rounded-lg shadow-lg">
                                <div className="relative group overflow-hidden shadow-lg w-[250px] h-[300px] mx-auto">
                                    <Image
                                        src={ member.image }
                                        alt={ member.name }
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center center"  // Ensures face is visible
                                        className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>


                                <div className="absolute bottom-0 left-0 w-full bg-white p-4">
                                    <h3 className="font-semibold text-gray-900">{ member.name }</h3>
                                    <p className="text-gray-500 text-sm">{ member.role }</p>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </section>

    </div>;
}
export default TeamPage;
