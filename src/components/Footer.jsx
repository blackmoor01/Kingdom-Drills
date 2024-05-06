import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-scroll";


const Footer = () => {

    const data = [
        {
            "ID":1,
            "link":"HOME"

        },
        {
            "ID":2,
            "link":"WHO WE ARE"
        },
        {
            "ID":3,
            "link":"WHAT WE DO"
        },
        {
            "ID":4,
            "link":"GALLERY"
        },
        {
            "ID":5,
            "link":"CHARITY"
        },
        {
            "ID":6,
            "link":"PARTNERS"
        },
        {
            "ID":7,
            "link":"OUR TEAM"
        }
    ]

    return (
        <footer className="bg-[#4682B4] text-white py-14 mt-20">
            <div className="container flex flex-col md:flex-row items-center justify-between px-1">

                {/*Kingdom Drills Logo*/}
                <div className="flex items-center justify-center mx-20 md:justify-start mb-4 md:mb-0">
                    <img src={require("../assets/Drilled Well.png")} alt="Kingdom Drills Logo" className="w-10 h-10 mr-2" />
                    <h1 className="text-lg font-bold">KINGDOM DRILLS</h1>
                </div>

                {/*Content of the navigation tab*/}
                <nav className="flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-16 cursor-pointer">
                    {data.map((item, index)=>(
                        <div className={"py-4"}>
                            <Link to={item.link.toLowerCase()} key={index} smooth={true} duration={500} className={"text-gray-300 text-center md:text-lg hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium"}>
                                {item.link}
                            </Link>
                        </div>
                    ))}
                </nav>
            </div>


            <div className="mt-10 mx-2 md:mx-20 flex flex-col md:flex-row items-center justify-between">
                <div className="flex text-4xl text-black cursor-pointer space-x-6">
                    <FaFacebook className="hover:scale-110" />
                    <FaTwitter className="hover:scale-110" />
                    <FaInstagramSquare className="hover:scale-110" />
                    <FaLinkedin className="hover:scale-110" />
                </div>
                <div className="flex flex-col md:flex-row mx-2 md:mx-auto space-y-4 md:space-y-0 md:space-x-16 mt-4 md:mt-0">
                    <p className="text-lg font-medium">ADDRESS: ADENTA-FILLING, ACCRA - GHANA</p>
                    <a href={"mailto:info@kingdrills.com"} className="text-lg font-medium hover:text-gray-800">EMAIL: info@kingdrills.com</a>
                    <p className="text-lg font-medium">TELEPHONE: +7805221231</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;