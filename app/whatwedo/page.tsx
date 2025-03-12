import Header from "@/components/Header";
import CustomizedTimeline from "@/components/Timeline";
import Link from "next/link";

function WhatWeDoPage() {
    return <div>
        <Header />
        <section className="relative h-[80vh] md:h-screen flex items-end">
            {/* Background Image */ }
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={ { backgroundImage: "url('/bgImage.jpg')" } }
            ></div>

            {/* Dark Overlay for Readability */ }
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Bottom Text Box */ }
            <div className="relative w-full bg-blue-500 p-6 text-center">
                <div className="flex justify-between max-w-6xl mx-auto ">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase">What We Do</h2>
                    <p className="w-1/2 text-left">
                        Combining genomic data, imaging profiles, and clinical information in a way that has not been possible before, our AI algorithms analyse why some patients may respond well to treatment, while others do not. Applying our team’s in-depth knowledge of the health system, we deliver this tool to doctors and patients through a user-friendly interface that integrates seamlessly with existing programs.
                    </p>
                </div>
            </div>
        </section>

        <section className="max-w-7xl mx-auto py-5 flex flex-col justify-center items-center">
            <CustomizedTimeline />

        </section>

        <section className='w-full flex items-center md:flex-row flex-col gap-7 max-w-6xl mx-auto border-t py-10 border-gray-400'>
            <p className='text-black font-extrabold flex-1 text-3xl max-md:text-center'>
                The software is expected to launch in Summer 2024. <br className='sm:block hidden' />
                Book a demo of the Curenetics platform
            </p>
            <Link href="/bookatrial" className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
                Book now
            </Link>
        </section>
    </div>;
}
export default WhatWeDoPage;
