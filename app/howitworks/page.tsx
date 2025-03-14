import Header from "@/components/Header";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";

function HowItWorksPage() {
    return <div className="pb-10">
        <Header />
        <section className="relative min-h-screen flex items-end">
            {/* Background Image */ }
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={ { backgroundImage: "url('/bgImage2.jpg')" } }
            ></div>

            {/* Dark Overlay for Readability */ }
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Bottom Text Box */ }
            <div className="relative w-full bg-blue-500 p-6 text-center">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl mx-auto gap-6 md:gap-10">
                    {/* Title */ }
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase text-center md:text-left">
                        How It Works
                    </h2>

                    {/* Text Content */ }
                    <p className="w-full md:w-1/2 text-center md:text-left text-white leading-relaxed">
                        Our AI-driven predictive models combine multiple data sources to create advanced bio-markers for cancer treatment. Unlike traditional bio-markers based on a single factor, our approach provides more accurate predictions of patient response to immunotherapy, improving treatment certainty.
                    </p>
                </div>
            </div>
        </section>

        <section className="flex flex-col justify-center items-center max-w-6xl mx-auto px-4 md:px-8 pb-10">
            {/* Section Heading */ }
            <h1 className="font-bold text-3xl md:text-4xl uppercase tracking-wider text-center py-10">
                Advantages of the Curenetics AI Tool
            </h1>

            {/* Accordion Section */ }
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                        We utilize an extensive range of data from different sources
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl leading-relaxed">
                        The data used within our tool combines genomic, histopathological, and clinical information in a way that has not been done before. This layering of data improves the accuracy of our predictions.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                        We use bespoke datasets relevant to the local population
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl leading-relaxed">
                        Around the globe, different populations have subtly different characteristics that affect their risk profile. Our tool is trained on the closest data available for the local population of our users. This accounts for these population variations, providing more individualized results.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                        We focus on the leading developments in cancer immunotherapy
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl leading-relaxed">
                        Immune checkpoint inhibitors are currently the fastest-growing segment of cancer immunotherapy. Our team keeps up to date with advances, developing our tool to incorporate new biomarkers.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                        We collaborate with health sector specialists who are leaders in AI analytics
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl leading-relaxed">
                        Our partner organizations provide expertise that contributes directly to Curenetics research and validates the accuracy of our results.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>

        <section className='w-full flex items-center md:flex-row flex-col gap-7 max-w-6xl mx-auto border-t py-10 border-gray-400 px-5 md:px-0'>
            <p className='text-black font-extrabold flex-1 text-3xl max-md:text-center'>
                Want to know more about us? <br className='sm:block hidden' />
                Contact Us!
            </p>
            <Link href="/team" className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0096ff] hover:to-[#0057ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 transition duration-300">
                Contact
            </Link>
        </section>
    </div>;
}
export default HowItWorksPage;
