import Header from "@/components/Header";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

function HowItWorksPage() {
    return (
        <div className="pb-10">
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
                            Our <b>smart locker-based laundry system</b> streamlines the entire process—from <b>placing an order</b> to <b>picking up fresh, clean clothes</b>—all through a <b>fully automated, tech-driven workflow</b>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step-by-Step Process */ }
            <section className="flex flex-col justify-center items-center max-w-6xl mx-auto px-4 md:px-8 pb-10">
                <h1 className="font-bold text-3xl md:text-4xl uppercase tracking-wider text-center py-10">
                    The Smart Laundry Process
                </h1>

                <Accordion type="single" collapsible className="w-full">
                    {/* Step 1 - Customer Places an Order */ }
                    <AccordionItem value="step-1">
                        <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                            Step 1: Place an Order
                        </AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl leading-relaxed">
                            Customers use the <b>mobile app or website</b> to select their laundry service, add special instructions, and make a <b>secure online payment</b>. They receive a <b>QR code</b> for dropping off their laundry.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Step 2 - Drop-off at a Smart Locker */ }
                    <AccordionItem value="step-2">
                        <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                            Step 2: Drop-off at a Smart Locker
                        </AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl leading-relaxed">
                            Using their <b>QR code or Pickup Code</b>, customers deposit their laundry into a <b>digitally controlled smart locker</b>. The locker <b>automatically assigns a compartment</b> and updates the system.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Step 3 - Logistics & Pickup */ }
                    <AccordionItem value="step-3">
                        <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                            Step 3: Pickup & Transport
                        </AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl leading-relaxed">
                            <b>Laundry staff retrieves orders</b> from the smart lockers, scanning each <b>order barcode</b> for verification. The laundry is <b>sorted, tagged, and transported</b> to the nearest processing center.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Step 4 - Laundry Processing */ }
                    <AccordionItem value="step-4">
                        <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                            Step 4: Cleaning & Processing
                        </AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl leading-relaxed">
                            At the <b>laundry facility</b>, orders are automatically classified into Water Wash or Dry Cleaning.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Step 5 - Ironing & Packaging */ }
                    <AccordionItem value="step-5">
                        <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                            Step 5: Ironing & Packaging
                        </AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl leading-relaxed">
                            Once laundered, garments are ironed, folded, or hung. They are subsequently sorted automatically for each order using our <b>advanced automated cloth sortation pipeline</b> and securely packaged with <b>eco-friendly</b> materials, ensuring their readiness for delivery.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <section className="flex flex-col justify-center items-center max-w-6xl mx-auto px-4 md:px-8 pb-10">
                <h1 className="font-bold text-3xl md:text-4xl uppercase tracking-wider text-center py-10">
                    Additional Features
                </h1>

                <Accordion type="single" collapsible className="w-full">
                    {/* Step 6 - Delivery Back to Smart Lockers */ }
                    <AccordionItem value="step-6">
                        <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                            Post-pickup customer process
                        </AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl leading-relaxed">
                            Customers can <b>submit after-sales requests</b> for issues like missing items or poor cleaning quality, and they can rate and review the service to help improve quality. Meanwhile, <b>the system monitors cabinet conditions</b> for scheduled maintenance and tracks equipment status to <b>prevent disruptions</b>
                        </AccordionContent>
                    </AccordionItem>


                    {/* Step 7 - Customer Pickup */ }
                    <AccordionItem value="step-7">
                        <AccordionTrigger className="text-2xl no-underline hover:no-underline">
                            Monitoring & data analysis
                        </AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl leading-relaxed">
                            The system manages the <b>full order lifecycle</b>, remotely controls smart cabinets, tracks laundry processes and logistics, handles payments and refunds, and <b>provides analytics on order completion</b>, after-sales feedback, and equipment usage.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* CTA Section */ }
            <section className="w-full flex items-center md:flex-row flex-col gap-7 max-w-6xl mx-auto border-t py-10 border-gray-400 px-5 md:px-0">
                <p className="text-black font-extrabold flex-1 text-3xl max-md:text-center">
                    Want to explore smart laundry solutions? <br className="sm:block hidden" />
                    Get in Touch!
                </p>
                <Link href="/contact" className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0096ff] hover:to-[#0057ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 transition duration-300">
                    Contact Us
                </Link>
            </section>
        </div>
    );
}

export default HowItWorksPage;
