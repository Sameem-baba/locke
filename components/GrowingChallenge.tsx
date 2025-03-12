/* eslint-disable @next/next/no-img-element */

function GrowingChallenge() {
    return (
        <div id="growingchallenge" className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-10 lg:px-16 py-10 gap-8">
            {/* Image Section */ }
            <div className="w-full md:w-2/5">
                <img
                    src="/thegrowingchallenge.webp"
                    alt="The Growing Challenge"
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>

            {/* Text Section */ }
            <div className="w-full md:w-3/5 flex flex-col justify-center text-center md:text-left">
                <div className="text-4xl font-black font-marker">
                    <p>The Growing Challenge</p>
                    <hr className="my-4 border-t-2 border-gray-300 w-24 mx-auto md:mx-0" />
                </div>

                <p className="text-lg font-normal text-gray-700 leading-relaxed">
                    Over 3 million patients are living with cancer in the UK alone, with 1,000 new diagnoses every day.
                    <br /><br />
                    The UK cancer survival rate falls behind many other developed countries, and outcomes for patients are extremely variable.
                    <br /><br />
                    Just 20-30% of cancer patients respond well to the treatment they are offered, which can cost up to £90,000 per patient.
                    <br /><br />
                    In every 100 patients treated with immunotherapy, up to 55 will experience severe or even life-threatening side effects. Toxicities attack the skin, colon, endocrine organs, liver, and lungs. Many more patients undergo immunotherapy treatment only to suffer from non-response or eventual relapse.
                </p>
            </div>
        </div>
    );
}

export default GrowingChallenge;
