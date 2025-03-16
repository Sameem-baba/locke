/* eslint-disable @next/next/no-img-element */

function GrowingChallenge() {
    return (
        <div id="growingchallenge" className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-10 lg:px-16 py-10 gap-8">
            {/* Image Section */ }
            <div className="w-full md:w-2/5">
                <img
                    src="/growingchallenge.png"
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
                    Since 2022, a significant shift has been observed in the UK laundry market, with an increasing number of customers opting for digital laundry services instead of traditional ones.                    <br /><br />
                    The UK cancer survival rate falls behind many other developed countries, and outcomes for patients are extremely variable.
                    <br /><br />
                    In 2023, the UK’s online laundry market is valued at approximately $1.98 billion and is projected to exceed $14 billion by 2030, reflecting a compound annual growth rate of 33.8%. In contrast, the traditional market segment is dwindling, now valued at only $2 billion.
                </p>
            </div>
        </div>
    );
}

export default GrowingChallenge;
