import Header from "@/components/Header";
import CustomizedTimeline from "@/components/Timeline";
import Link from "next/link";

function WhatWeDoPage() {
    return <div>
        <Header />
        <section className="relative min-h-screen flex items-end">
            {/* Background Image */ }
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={ { backgroundImage: "url('/bgImage.jpg')" } }
            ></div>

            {/* Dark Overlay for Readability */ }
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Bottom Text Box */ }
            <div className="relative w-full bg-blue-500 p-6 text-center">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl mx-auto gap-6 md:gap-10">
                    {/* Title */ }
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase text-center md:text-left">
                        What We Do
                    </h2>

                    {/* Text Content */ }
                    <p className="w-full md:w-1/2 text-center md:text-left text-white leading-relaxed">
                        We are designing a comprehensive digital platform to enhance management and operations within the laundry business. Our initiative includes the development of an innovative customer interface, allowing users to interact seamlessly through a mobile app or website. By implementing digitally controlled lockers and a sophisticated delivery management system, we aim to revolutionize the laundry service experience, making it more convenient and efficient. This project represents a significant step towards modernizing traditional laundry services through cutting-edge technology.
                    </p>
                </div>
            </div>
        </section>


        <section className="max-w-7xl mx-auto py-5 flex flex-col justify-center items-center">
            <CustomizedTimeline />

        </section>

        <section className='w-full px-4 flex items-center md:flex-row flex-col gap-7 max-w-6xl mx-auto border-t py-10 border-gray-400'>
            <p className='text-black font-extrabold flex-1 text-2xl md:text-3xl max-md:text-center'>
                Want to know how it works? <br className='sm:block hidden' />
                Click the button
            </p>
            <Link href="/howitworks" className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0096ff] hover:to-[#0057ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 transition duration-300">
                Click Here
            </Link>
        </section>
    </div>;
}
export default WhatWeDoPage;
