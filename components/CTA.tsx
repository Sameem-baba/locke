import React from 'react';
import Link from 'next/link';

const CTA = () => {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto border-t border-gray-400 py-10 px-5 text-center md:text-left">
            {/* Text Section */ }
            <p className="text-black font-extrabold text-2xl md:text-3xl leading-snug">
                Do you like our vision? Want to know more about us?
                <br className="hidden sm:block" />
                Click on the button!
            </p>

            {/* CTA Button */ }
            <Link
                href="/about"
                className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0096ff] hover:to-[#0057ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 transition duration-300"
            >
                Click here
            </Link>
        </section>
    );
};

export default CTA;
