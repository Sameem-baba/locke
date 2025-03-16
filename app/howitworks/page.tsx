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

        {/* Hero Section */ }
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
                        Our digital platform integrates <b>smart lockers, automated logistics, and AI-powered analytics</b> to transform traditional laundry services into a seamless, tech-driven experience.
                    </p>
                </div>
            </div>
        </section>

        {/* Advantages Section */ }
        <section className="flex flex-col justify-center items-center max-w-6xl mx-auto px-4 md:px-8 pb-10">
            {/* Section Heading */ }
            <h1 className="font-bold text-3xl md:text-4xl uppercase tracking-wider text-center py-10">
                Why Choose Laundroark?
            </h1>

            {/* Accordion Section */ }
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                        We provide a fully automated, hassle-free laundry experience
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl leading-relaxed">
                        Our platform integrates <b>digital ordering, smart lockers, and real-time tracking</b>, enabling users to schedule, drop off, and pick up their laundry effortlessly.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                        AI-driven insights optimize business performance
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl leading-relaxed">
                        Our <b>AI-powered analytics</b> provide valuable insights on customer demand, peak service hours, and inventory management, helping businesses enhance efficiency and profitability.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                        Smart lockers enable seamless laundry pick-up and drop-off
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl leading-relaxed">
                        Customers can securely deposit their laundry in our <b>digitally controlled lockers</b>, eliminating the need for long wait times and enhancing convenience.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                        Customizable solutions tailored to your business needs
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl leading-relaxed">
                        We offer <b>scalable solutions for laundry providers of all sizes</b>, allowing businesses to customize their <b>locker network, pricing models, and delivery services</b> to fit their operational requirements.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>

        {/* CTA Section */ }
        <section className='w-full flex items-center md:flex-row flex-col gap-7 max-w-6xl mx-auto border-t py-10 border-gray-400 px-5 md:px-0'>
            <p className='text-black font-extrabold flex-1 text-3xl max-md:text-center'>
                Want to explore smart laundry solutions? <br className='sm:block hidden' />
                Get in Touch!
            </p>
            <Link href="/contact" className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0096ff] hover:to-[#0057ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 transition duration-300">
                Contact Us
            </Link>
        </section>
    </div>;
}
export default HowItWorksPage;
