/* eslint-disable @next/next/no-img-element */

function GrowingChallenge() {
    return (
        <div
            className="flex max-h-fit w-full flex-col items-center justify-around gap-4 pb-20 md:flex-row "
        >
            <div className="h-fit  w-full md:w-[40%]">
                <img src="/thegrowingchallenge.webp" alt="" className="rounded-xl" />
            </div>
            <div className="flex h-full w-full flex-col items-cent justify-center p-5 md:w-[50%] ">
                <div className="relative flex h-full w-full items-end">
                    <div className="font-marker text-4xl font-black">
                        <p>
                            The Growing Challenge
                        </p>
                        <hr
                            aria-orientation="horizontal"
                            className="my-5"
                        />
                    </div>
                </div>
                <p
                    className="text-lg font-normal"
                >

                    <br />
                    Over 3 million patients are living with cancer in the UK alone, with 1,000 new diagnoses every day.
                    <br />
                    <br />
                    The UK cancer survival rate falls behind many other developed countries and outcomes for patients are extremely variable.
                    <br />
                    <br />
                    Just 20-30% of cancer patients respond well to the treatment they are offered, which can cost up to £90,000 per patient. In every 100 patients treated with immunotherapy, up to 55 will experience side effects which can be severe or even life-threatening.  Toxicities attack the skin, colon, endocrine organs, liver, and lungs. Many more patients undergo immunotherapy treatment only to suffer from non-response or eventual relapse.

                </p>
            </div>
        </div>
    );
}
export default GrowingChallenge;
