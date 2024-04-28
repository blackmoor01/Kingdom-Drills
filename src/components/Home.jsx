import React from 'react';

const Home = () => {
    return (
        <div name={"home"} className="flex-1">

            <div className="relative">
                <img src={require("../assets/African woman pouring water in a recipient outdoors.png")}
                     alt="Background Display" className="w-full h-auto"/>
                <div className="absolute inset-0 flex items-center mx-4 md:mx-20">
                    <div className="max-w-full md:max-w-[40%] text-white">
                        <h1 className="text-3xl md:text-4xl px-4 md:px-5 py-4 font-bold mb-4">BEST BOREHOLE DRILLING COMPANY IN GHANA FOR
                            THE PAST 13
                            YEARS</h1>
                        <p className="text-lg md:text-2xl px-4 md:px-5 py-6 md:py-10 font-medium mb-8">With Over 15 Years Of Invaluable Experience
                            In End-To-End Borehole
                            Drilling And Strategically Located In The Capital City Of Accra, Kingdom Drills Is Poised To
                            Enhance Its Operations, Efficiency, And Overall Business Capabilities.</p>

                        <button
                            className="bg-transparent hover:text-white hover:bg-gray-700 text-[#4682B4] font-bold py-2 px-4 md:px-5 ml-4 md:ml-5 border border-[#4682B4] rounded-lg shadow-lg">
                            Request A Quote
                        </button>
                    </div>
                </div>
            </div>


            <div className="mt-8 md:mt-20 max-w-full md:max-w-[40%] mx-4 md:mx-20 flex-col py-5">
                <h1 className="text-3xl md:text-4xl font-bold px-4 md:px-5 py-2">Get to know KINGDOM DRILLS</h1>
                <p className="text-lg md:text-2xl font-medium px-4 md:px-5 py-3 md:py-5 mb-5">With over 15 years of experience, we strive to
                    become a leading provider of sustainable water solutions in Ghana by establishing .....</p>
                <button
                    className="bg-transparent hover:text-white hover:bg-gray-700 text-[#4682B4] font-bold py-2 px-8 md:px-16 ml-4 md:ml-5 border border-[#4682B4] rounded-lg shadow-lg">
                    Read More
                </button>
            </div>

        </div>
    );
};

export default Home;
