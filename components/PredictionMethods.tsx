/* eslint-disable @next/next/no-img-element */

function PredictionMethods() {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full px-4 md:px-10 lg:px-16 py-10 gap-8">
            {/* Text Section */ }
            <div className="w-full md:w-3/5 flex flex-col justify-center text-center md:text-left">
                <div className="text-4xl font-black font-marker">
                    <p>Our Vision</p>
                    <hr className="my-4 border-t-2 border-gray-300 w-24 mx-auto md:mx-0" />
                </div>

                <p className="text-lg font-normal text-gray-700 leading-relaxed">
                    In today&apos;s evolving market, an undeniable trend towards digitisation is taking shape. This represents a pivotal moment for businesses, as the ability to embrace, retain, and expand in this new landscape is crucial
                    <br /><br />
                    The foundation of this digitisation trend lies in the growing shift in consumer behaviour toward digital interfaces. People are increasingly relying on these modern solutions, which prove to enhance their lives more effectively than traditional methods.
                    <br /><br />
                    As a technology solution provider, we are dedicated to assisting both current and prospective businesses in seamlessly transitioning to a digital operational model. Our goal is to make this transformation quick and efficient, ensuring you can adapt and thrive in this digital era. Let&apos;s work together to navigate this journey successfully.
                </p>
            </div>

            {/* Image Section */ }
            <div className="w-full md:w-2/5">
                <img
                    src="/vision.webp"
                    alt="The Prediction Methods"
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
}

export default PredictionMethods;
