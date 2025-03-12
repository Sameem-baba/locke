"use client"

import Link from "next/link";

function Hero() {
    // Function to handle smooth scrolling
    const handleScrollToSection = () => {
        const section = document.getElementById("growingchallenge");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-full isolate px-6 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={ {
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    } }
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-5xl flex flex-col items-center justify-center h-full">
                {/* <div className="hidden sm:mb-8 sm:flex* sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Announcing our next round of funding.{ ' ' }
                        <a href="#" className="font-semibold text-indigo-600">
                            <span aria-hidden="true" className="absolute inset-0" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div> */}
                <div className="text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                        We are working to defeat cancer with data driven technology
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Personalising cancer care with AI-powered prediction of treatment response
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/bookatrial"
                            className="rounded-md uppercase tracking-wider bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Book A Trial
                        </Link>
                        <button
                            onClick={ handleScrollToSection }
                            className="text-sm/6 uppercase cursor-pointer tracking-wider font-semibold text-gray-900"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={ {
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    } }
                    className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    )
}
export default Hero;
