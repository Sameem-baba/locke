import Header from "@/components/Header";

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
            <div className="relative w-full bg-lime-300 p-6 text-center">
                <div className="flex justify-between max-w-6xl mx-auto ">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase">What We Do</h2>
                    <p className="w-1/2 text-left">
                        Combining genomic data, imaging profiles, and clinical information in a way that has not been possible before, our AI algorithms analyse why some patients may respond well to treatment, while others do not. Applying our team’s in-depth knowledge of the health system, we deliver this tool to doctors and patients through a user-friendly interface that integrates seamlessly with existing programs.
                    </p>
                </div>
            </div>
        </section>
    </div>;
}
export default WhatWeDoPage;
