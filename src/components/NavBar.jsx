import React, {useState} from "react";
import { Link } from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';



const NavBar = () => {
    const [nav, setNav] = useState(false);

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
        <div className="bg-[#4682B4] shadow py-4 md:py-6">

            <div className="container flex flex-wrap items-center justify-between px-4 md:px-1">


                <div className="flex items-center mb-2 md:mb-0">
                    <img src={require("../assets/Drilled Well.png")} alt="Kingdom Drills Logo"
                         className="w-8 h-8 md:w-10 md:h-10 mr-2 ml-20"/>
                    <span className="text-lg font-bold text-white">KINGDOM DRILLS</span>
                </div>


                <div onClick={() => setNav(!nav)} className={"cursor-pointer pr-4 z-10 text-white md:hidden"}>
                    {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
                </div>


                {nav && (
                    <ul className={"flex flex-col justify-center items-center top-0 left-0 w-full h-screen bg-gradient-to-b from-[#4682B4] to-black cursor-pointer"}>
                        {data.map((item, index)=>(
                            <div className={"py-4"}>
                                <Link to={item.link.toLowerCase()} key={index} smooth={true} duration={500} className={"text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium"}>{item.link}</Link>
                            </div>
                        ))}
                    </ul>
                )}


                <nav className="hidden md:flex justify-center md:justify-end md:space-x-16 space-x-6 cursor-pointer">
                    {data.map((item, index)=>(
                        <div className={"py-4"}>
                            <Link to={item.link.toLowerCase()} key={index} smooth={true} duration={500} className={"text-gray-300 md:text-lg hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium"}>
                                {item.link}
                            </Link>
                        </div>
                    ))}
                </nav>


            </div>
        </div>
    )
};

export default NavBar;

