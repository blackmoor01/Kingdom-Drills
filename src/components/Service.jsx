import React from "react";
import { FaBinoculars, FaBolt, FaWater, FaWrench } from "react-icons/fa";

const Services = () => {

    {/*Function for show-casing the services we render */}
    const OurServices = () => {
        const data = [
            {
                "Txt": "Borehole drilling",
                "Icon": <FaBolt className="text-8xl mx-auto" />
            },
            {
                "Txt": "Pump installation",
                "Icon": <FaWrench className="text-8xl mx-auto" />
            },
            {
                "Txt": "Water treatment",
                "Icon": <FaWater className="text-8xl mx-auto" />
            },
            {
                "Txt": "Hydrological surveying",
                "Icon": <FaBinoculars className="text-8xl mx-auto" />
            }
        ];

        return (
            <div className="flex justify-between space-x-4 cursor-pointer">
                {data.map((item, index) => (
                    <div
                        className="flex flex-col items-center justify-center"
                        key={index}
                    >
                        <div className="flex border border-[#4682B4] rounded-lg bg-white shadow-2xl hover:scale-110 p-4 h-72 w-72 justify-center items-center text-center">
                            {item.Icon}
                        </div>
                        <div className="mt-2 font-bold">{item.Txt}</div>
                    </div>
                ))}
            </div>
        );
    };

    const Ratings = () => {
        const data = [
            {
                "Numbers": "800+",
                "Text": "Boreholes Drilled"
            },
            {
                "Numbers": "900+",
                "Text": "Services Rendered"
            },
            {
                "Numbers": "1500+",
                "Text": "Happy Clients"
            },
            {
                "Numbers": "10+",
                "Text": "Years of Experience"
            }
        ]
        return (
            <div className={"flex-row flex space-x-5 md:space-x-36"}>
                {data.map((item, index) => (
                    <div className={"flex flex-col items-center justify-center cursor-pointer hover:scale-110"} key={index}>
                        <div className={"text-4xl md:text-5xl text-[#8B4513] font-bold"}>{item.Numbers}</div>
                        <div className={"mt-2 text-white font-medium text-lg md:text-xl"}>{item.Text}</div>
                    </div>
                ))}
            </div>
        )
    };


    return (
        <div name={"what-we-do"} className={"mx-10 md:mx-20 mt-20"}>
            <h1 className={"text-4xl font-bold"}>What We Do</h1>
            <p className={"text-2xl font-medium py-5 px-1 mb-5"}>We offer the following services</p>

            <div className={""}>
                <OurServices />
            </div>

            <div className="mt-28 flex flex-col items-center justify-center relative">
                <img src={require("../assets/Rectangle 7.png")} alt="Display for the numeration"
                     className="w-full h-auto rounded-lg" />

                <div className="absolute inset-0 -mt-14 flex items-center justify-center flex-col mx-5 md:mx-20">
                    <Ratings />
                </div>
            </div>

            <div className={"items-center justify-center flex"}>
                <button
                    className="mt-8 bg-transparent text-[#4682B4] hover:text-white hover:bg-gray-700 font-bold py-2 px-5 md:px-8 border border-[#4682B4] rounded-lg shadow-lg"
                >
                    Request A Quote
                </button>
            </div>


        </div>
    )
};

export default Services;
