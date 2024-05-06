import React from "react";

const Charity = () => {
    const CharityGallery = () => {
        const data = [
            {
                Image: require("../assets/Charity01.png"),
            },
            {
                Image: require("../assets/Charity02.png"),
            },
            {
                Image: require("../assets/Charity03.png"),
            },
            {
                Image: require("../assets/Charity04.png"),
            },
        ];
        return (
            <div className="flex justify-center flex-wrap gap-4">
                {data.map((item, index) => (
                    <div className="flex border-[#4682B4] rounded-lg bg-white shadow-2xl hover:scale-110 p-4 justify-center md:max-w-full items-center max-w-xs" key={index}>
                        <img src={item.Image} alt={`Pic ${index}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div name="charity" className="mx-20 md:py-32 py-14">
            <h1 className="text-4xl font-bold">Charity</h1>
            <p className="text-2xl font-medium py-5 px-1 mb-5">View our charity and donations made</p>

            <div className="flex justify-center">
                <CharityGallery />
            </div>
        </div>
    );
};

export default Charity;
