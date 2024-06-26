import React from "react";

const Gallery = () => {


    const GalleryCards = () => {
        const data = [
            {
                "Image": require("../assets/Rectangle 8.png")
            },
            {
                "Image": require("../assets/Rectangle 9.png")
            },
            {
                "Image": require("../assets/Rectangle 10.png")
            },
            {
                "Image": require("../assets/Rectangle 11.png")
            }
        ];

        return (
            <div className="flex justify-between space-x-4 cursor-pointer flex-wrap gap-4">
                {data.map((item, index) => (
                    <div className="flex border-[#4682B4] rounded-lg bg-white shadow-2xl hover:scale-110 max-w-xs p-4 justify-center items-center text-center" key={index}>
                        <img src={item.Image} alt={`Pic ${index}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        );
    };


    return(
        <div name={"gallery"} className={"mx-20 md:py-32 py-14"}>
            <h1 className={"text-4xl font-bold inline border-b-4 border-gray-500"}>Our Gallery</h1>
            <p className={"text-2xl font-medium py-5 px-1 mb-5"}>Pictures from our previous projects</p>

            <div className={"flex justify-center"}>
                <GalleryCards/>
            </div>
        </div>
    )
};

export default Gallery;