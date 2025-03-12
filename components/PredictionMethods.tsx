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
                    Cancer is a devastating diagnosis for any individual, so improving outcomes for cancer patients is key.
                    <br /><br />
                    The Curenetics AI-powered prediction tool enables patients and doctors to make well-informed decisions about the best route of cancer treatment.
                    <br /><br />
                    Patients can enjoy a higher level of certainty that the precious energy, time, and resources spent on immunotherapy will have a positive impact on their lives. If treatment is likely to be ineffective, a different course of action can be explored on an individual basis.
                </p>
            </div>

            {/* Image Section */ }
            <div className="w-full md:w-2/5">
                <img
                    src="/thePredictionMethods.webp"
                    alt="The Prediction Methods"
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
}

export default PredictionMethods;
