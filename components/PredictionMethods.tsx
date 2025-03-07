/* eslint-disable @next/next/no-img-element */

function PredictionMethods() {
    return (
        <div
            className="flex max-h-fit w-full flex-col items-center justify-around gap-4 pb-20 md:flex-row "
        >
            <div className="h-fit order-last  w-full md:w-[40%]">
                <img src="/thePredictionMethods.webp" alt="" className="rounded-xl" />
            </div>
            <div className="flex h-full w-full flex-col items-cent justify-center p-5 md:w-[50%] ">
                <div className="relative flex h-full w-full items-end">
                    <div className="font-marker text-4xl font-black">
                        <p>
                            Our Vision
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

                    Cancer is a devastating diagnosis for any individual so it is key to improving the outcomes for cancer patients.                     <br />
                    <br />

                    The Curenetics AI-powered prediction tool enables patients and doctors to make well-informed decisions about the best route of cancer treatment.
                    <br />
                    <br />
                    Patients can enjoy a higher level of certainty that the precious energy, time, and resources spent on immunotherapy will have a positive impact on their lives. If treatment is likely to be ineffectual, a different course of action can be explored on an individual basis.
                </p>
            </div>
        </div>
    );
}
export default PredictionMethods;
