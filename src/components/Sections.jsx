import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Services from "./Service";
import Gallery from "./Gallery";
import Charity from "./Charity";
import Partners from "./Partners";
import Team from "./Team";
import QuoteForm from "./QuoteForm";
import Footer from "./Footer";

const Sections = () => {
    return (
        <div className={"flex-1"}>
            <NavBar/>
            <Home/>
            <Services/>
            <Gallery/>
            <Charity/>
            <Partners/>
            <Team/>
            <QuoteForm/>
            <Footer/>
        </div>
    )
};
export default Sections;