import React from "react";


const Partners = () => {

    const PartnershipCompanies = () => {

        const data = [
            { "Image": require("../assets/Citibank.png") },
            { "Image": require("../assets/Multibanco.png") },
            { "Image": require("../assets/Merchant Account.png") },
            { "Image": require("../assets/Itch Io.png") },
            { "Image": require("../assets/HSBC.png") },
            { "Image": require("../assets/Magnetic Card.png") },
            { "Image": require("../assets/Bandcamp.png") },
        ];

        return (
            <div className="flex md:flex-wrap soace-x-4 md:space-x-16 md:px-10 justify-center mt-10">
                {data.map((item, index) => (
                    <div key={index} className="m-2">
                        <div className="h-auto w-full md:w-20 md:h-20  rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:scale-110">
                            <img src={item.Image} className="h-auto w-full" alt={`Partner Logo ${index}`} />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div name={"partners"} className={"mx-20 py-14 md:py-32"}>
            <h1 className={"text-4xl font-bold"}>Our Partners</h1>
            <p className={"text-2xl font-medium py-5 px-1 mb-5"}>Brands that work with us</p>

            <div className="mt-28 flex flex-col items-center justify-center relative">
                <img src={require("../assets/Rectangle 7.png")} alt="Display for the numeration" className="w-full h-auto rounded-lg" />
                <div className={"absolute inset-0 -mt-14 flex items-center justify-center flex-col mx-20"}>
                    <PartnershipCompanies />
                </div>
            </div>

            <div className={"items-center justify-center flex"}>
                <button className="mt-8 bg-transparent text-[#4682B4] hover:text-white hover:bg-gray-700 font-bold py-2 px-5 border border-[#4682B4] rounded-lg shadow-lg">
                    Request A Quote
                </button>
            </div>
        </div>
    );
};

export default Partners;
