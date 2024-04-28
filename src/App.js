import NavBar from "../src/components/NavBar"
import Home from "./components/Home";
import Services from "./components/Service";
import Gallery from "./components/Gallery";
import Charity from "./components/Charity";
import Partners from "./components/Partners";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={"flex-1"}>
      <NavBar />
      <Home />
      <Services/>
      <Gallery/>
      <Charity/>
      <Partners/>
      <Team/>
      <Footer/>

    </div>
  );
}

export default App;
