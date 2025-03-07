import CTA from "@/components/CTA";
import Header from "@/components/Header";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function HowItWorksPage() {
    return <div className="pb-10">
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
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase">How it works</h2>
                    <p className="w-1/2 text-left">
                        Our AI-driven predictive models combine multiple data sources to create advanced bio-markers for cancer treatment. Unlike traditional bio-markers based on a single factor, our approach provides more accurate predictions of patient response to immunotherapy, improving treatment certainty.
                    </p>
                </div>
            </div>
        </section>
        <section className="flex flex-col justify-center items-center max-w-6xl mx-auto pb-10">
            <h1 className="font-bold text-4xl uppercase tracking-wider text-center py-10">Advantages of the Curenetics AI tool</h1>



            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">We utilise an extensive range of data from different sources</AccordionTrigger>
                    <AccordionContent className="text-xl">
                        The data used within our tool combines genomic, histopathological, and clinical information in a way that has not been done before. This layering of data improves the accuracy of our predictions.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">We use bespoke datasets relevant to the local population</AccordionTrigger>
                    <AccordionContent className="text-xl">
                        Around the globe, different populations have subtly different characteristics that affect their risk profile. Our tool is trained on the closest data available for the local population of our users. This accounts for these population variations, providing more individualised results.                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">We focus on the leading developments in cancer immunotherapy</AccordionTrigger>
                    <AccordionContent className="text-xl">
                        Immune checkpoint inhibitors is currently the fastest growing segment of cancer immunotherapy. Our team keeps up to date with advances, developing our tool to incorporate new bio-markers.                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-2xl no-underline hover:no-underline">We collaborate with health sector specialists who are leaders in AI analytics</AccordionTrigger>
                    <AccordionContent className="text-xl">
                        Our partner organisations provide expertise that contributes directly to Curenetics research and validates the accuracy of our results.                     </AccordionContent>
                </AccordionItem>
            </Accordion>

        </section>
        <CTA />
    </div>;
}
export default HowItWorksPage;
