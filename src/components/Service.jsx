import React from "react";
import {Link} from "react-router-dom";


const Services = () => {

    const OurServices = () => {
        const data = [
            {
                "Image":require("../assets/Hydrological surveying.jpeg") ,
                "Name":"Geological Surveying",
            },
            {
                "Image":require("../assets/Borehole.png"),
                "Name":"Borehole Drilling",
            },
            {
                "Image":require("../assets/Hydro Fracture.png") ,
                "Name":"Hydrological Fracture",
            },
            {
                "Image":require("../assets/Pump Installation.png"),
                "Name":"Pump Installation",
            },
            {
                "Image":require("../assets/Water treatment.jpeg"),
                "Name":"Water Treatment",

            },
        ]
        return(
            <div className="flex justify-center space-x-4 cursor-pointer flex-wrap gap-4 items-center">
                {data.map((item, index) => (
                    <div
                        className="flex flex-col items-center justify-center md:space-x-full"
                        key={index}
                    >
                        <div className=" flex rounded-lg bg-white shadow-2xl hover:scale-110
                         p-4 md:w-full md:h-auto justify-center items-center text-center max-w-xs ">
                            <img src={item.Image} alt={`Team ${index}`} className="w-full h-auto"/>
                        </div>
                        <div className="mt-8 font-bold md:text-lg text-sm">{item.Name}</div>
                    </div>
                ))}
            </div>
        )
    }


    const Ratings = () => {
        const data = [{
            "Numbers": "800+", "Text": "Boreholes Drilled"
        }, {
            "Numbers": "900+", "Text": "Services Rendered"
        }, {
            "Numbers": "1500+", "Text": "Happy Clients"
        }, {
            "Numbers": "10+", "Text": "Years of Experience"
        }]
        return (<div className={"flex-row flex md:flex-wrap  justify-center items-center md:space-x-40"}>
                {data.map((item, index) => (
                    <div className={"flex"}>
                        <div
                            className={"flex flex-col md:space-x-24 space-x-2 mt-10 md:w-12 md:flex-col md:h-12 md:mx-auto items-center justify-center cursor-pointer hover:scale-110"}
                            key={index}>
                            <div
                                className={"text-base  md:text-5xl text-[#8B4513] md:font-bold font-medium"}>{item.Numbers}</div>
                            <div className={"mt-2 text-white font-medium text-xs md:text-xl text-center flex"}>{item.Text}</div>
                        </div>
                    </div>
                ))}
        </div>)
    };


    return (
        <div name={"what we do"} className={"mx-10 md:mx-20 md:mt-20 py-4"}>
        <h1 className={"text-4xl font-bold inline border-b-4 border-gray-500"}>What We Do</h1>
        <p className={"text-2xl font-medium py-5 px-1 mb-5"}>We offer the following services</p>

        <div className={"flex justify-center"}>
            <OurServices/>
        </div>

        <div className="mt-28 flex flex-col items-center justify-center relative">
        <img src={require("../assets/Rectangle 7.png")} alt="Display for the numeration"
                     className="w-full h-screen md:h-auto rounded-lg"/>

                <div className="absolute inset-0 -mt-8 flex items-center justify-center flex-col mx-5 md:mx-20">
                    <Ratings/>
                </div>
            </div>

            <div className={"items-center justify-center flex"}>
                <Link to={"/thankyou"} smooth={true} duration={500}>
                    <button
                        className=" mt-8 bg-transparent hover:text-white hover:bg-gray-700 text-[#4682B4] font-bold py-1 px-4 md:px-5 ml-4 md:ml-5 border border-[#4682B4] rounded-lg shadow-lg">
                        Request A Quote
                    </button>
                </Link>
            </div>


        </div>)
};

export default Services;
