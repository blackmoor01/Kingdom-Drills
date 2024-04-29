import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-scroll";


{/*Footer function for displaying the base content of the landing page*/}
const Footer = () => {
    return (
        <footer className="bg-[#4682B4] text-white py-14 mt-20">
            <div className="container flex flex-col md:flex-row items-center justify-between px-1">

                {/*Kingdom Drills Logo*/}
                <div className="flex items-center justify-center mx-20 md:justify-start mb-4 md:mb-0">
                    <img src={require("../assets/Drilled Well.png")} alt="Kingdom Drills Logo" className="w-10 h-10 mr-2" />
                    <span className="text-lg font-bold">KINGDOM DRILLS</span>
                </div>

                {/*Content of the navigation tab*/}
                <nav className="flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-16 cursor-pointer">
                    <Link to="home" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">HOME</Link>
                    <Link to="about" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">WHO WE ARE</Link>
                    <Link to="what-we-do" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">WHAT WE DO</Link>
                    <Link to="gallery" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">GALLERY</Link>
                    <Link to="charity" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">CHARITY</Link>
                    <Link to="partners" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">PARTNERS</Link>
                    <Link to="our-team" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">OUR TEAM</Link>
                </nav>
            </div>


            <div className="mt-10 mx-2 md:mx-20 flex flex-col md:flex-row items-center justify-between">
                <div className="flex text-4xl text-black cursor-pointer space-x-6">
                    <FaFacebook className="hover:scale-110" />
                    <FaTwitter className="hover:scale-110" />
                    <FaInstagramSquare className="hover:scale-110" />
                    <FaLinkedin className="hover:scale-110" />
                </div>
                <div className="flex flex-col md:flex-row mx-2 md:mx-56 space-y-4 md:space-y-0 md:space-x-16 mt-4 md:mt-0">
                    <p className="text-sm font-medium">ADDRESS: ACCRA - GHANA</p>
                    <p className="text-sm font-medium">EMAIL: info@kingdrills.com</p>
                    <p className="text-sm font-medium">CALL: +23323456789</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
