import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Sections from "./components/Sections";
import ThankYou from "./components/ThankYou";
import NoPage from "./components/NoPage"


function App() {
  return (
    <div className={"flex-1"}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Sections/>}/>
                <Route path={"/thankyou"} element={<ThankYou/>}/>
                <Route path={"*"} element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
