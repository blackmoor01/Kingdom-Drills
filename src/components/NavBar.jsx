import React from "react";
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="bg-[#4682B4] shadow py-4 md:py-6">

            <div className="container flex flex-wrap items-center justify-between px-4 md:px-1">
                <div className="flex items-center mb-2 md:mb-0">
                    <img src={require("../assets/Drilled Well.png")} alt="Kingdom Drills Logo"
                         className="w-8 h-8 md:w-10 md:h-10 mr-2"/>
                    <span className="text-lg font-bold text-white">KINGDOM DRILLS</span>
                </div>

                <nav className="hidden md:flex justify-evenly space-x-6 cursor-pointer">
                    <Link to="home" smooth={true} duration={500}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium">HOME</Link>
                    <Link to="about" smooth={true} duration={500}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium">WHO
                        WE ARE</Link>
                    <Link to="what-we-do" smooth={true} duration={500}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium">WHAT
                        WE DO</Link>
                    <Link to="gallery" smooth={true} duration={500}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium">GALLERY</Link>
                    <Link to="charity" smooth={true} duration={500}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium">CHARITY</Link>
                    <Link to="partners" smooth={true} duration={500}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium">PARTNERS</Link>
                    <Link to="our-team" smooth={true} duration={500}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium">OUR
                        TEAM</Link>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    {/* You can implement your mobile menu here */}
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
