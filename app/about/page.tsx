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

        <section className="py-10 max-w-7xl mx-auto">
            <div className="px-12 flex z-50 flex-col">
                <h1 className="text-4xl font-bold uppercase tracking-wider pb-2 text-black mb-2">About us</h1>

                {/* <p className="font-normal text-lg w-[35%] text-[--black] font-regular-18">
                    Although my schedule is limited, I&apos;m always open to exploring projects
                    that spark my interest.
                </p> */}
                <div className="design-content-container">
                    <div className="design-content">
                        <p>
                            Curenetics brings together a diverse team of industry-leading specialists. Collaboration is central to our approach, combining the capabilities of practicing clinicians, AI engineers, data scientists, cancer biologists and immunologists to tackle this single complex challenge.
                            <br /> <br />

                            Fundamental to our research is access to high-quality existing data sets. We gather and analyse patient genomics, imaging profiles and clinical information from hospitals and labs, developing AI models that can layer these markers to produce uniquely accurate results.
                            <br /><br />
                            Currently at the Proof-of-Concept stage, our model will integrate into established health systems to give patients and doctors a reliable, accurate and cost-effective tool to make informed choices about cancer treatment options.
                            <br /> <br />
                            Curenetics also has a pipeline of AI-driven projects currently at the discovery stage, which include diagnosis of oral cancer and prediction of stem cell transplant rejection.

                        </p>
                    </div>

                </div>
            </div>
        </section>

        <section className='w-full flex items-center md:flex-row flex-col gap-7 max-w-6xl mx-auto border-t py-10 border-gray-400'>
            <p className='text-black font-extrabold flex-1 text-3xl max-md:text-center'>
                Meet the minds behind Curenetics.<br className='sm:block hidden' />
                Join us in the fight against cancer.            </p>
            <Link href="/team" className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
                Meet our team
            </Link>
        </section>
    </div>;
}
export default AboutUsPage;
