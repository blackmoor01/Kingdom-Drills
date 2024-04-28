import React from "react";

const Charity = () =>{

    {/*Function for the display of the Charity image cards*/}
    const CharityGallery = () => {
        const data = [
            {
                "Image":require("../assets/Charity01.png")
            },
            {
                "Image":require("../assets/Charity02.png")
            },
            {
                "Image":require("../assets/Charity03.png")
            },
            {
                "Image":require("../assets/Charity04.png")
            }

        ]
        return(
            <div className="flex justify-between space-x-4 cursor-pointer">
                {data.map((item, index) => (
                    <div
                        className="flex border-[#4682B4] rounded-lg bg-white shadow-2xl hover:scale-110 p-4 justify-center items-center text-center"
                        key={index}>
                        <img src={item.Image} alt={`Image ${index}`} className="w-full h-auto"/>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div name={"charity"} className={"mx-20 mt-20"}>
            <h1 className={"text-4xl font-bold"}>Charity</h1>
            <p className={"text-2xl font-medium py-5 px-1 mb-5"}>View our charity and donation made</p>

            <div className={""}>
                <CharityGallery/>
            </div>
        </div>
    )
};

export default Charity;