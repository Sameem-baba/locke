import Header from "@/components/Header";
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

function AboutUsPage() {
    return <div>
        <Header />
        <section className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/bgvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 px-4">
                <div className="text-center text-white">
                    <h1 className="text-3xl md:text-6xl font-bold">
                        We are Curenetics
                    </h1>
                    <p className="mt-4 text-sm md:text-2xl max-w-lg md:max-w-4xl mx-auto">
                        It is our mission to accurately predict treatment responses for cancer patients using powerful AI technology.
                    </p>
                    <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 mt-5 focus-visible:outline-indigo-600">
                        Learn More
                    </button>
                </div>
            </div>

            <Link
                href="next-section"
                // smooth={ true }
                // duration={ 600 }
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            >
                <ChevronDownIcon className="w-10 h-10 text-white animate-bounce" />
            </Link>

        </section>

        <section>

        </section>
    </div>;
}
export default AboutUsPage;
