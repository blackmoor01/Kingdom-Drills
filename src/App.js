import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Sections from "./components/Sections";
import ThankYou from "./components/ThankYou";


function App() {
  return (
    <div className={"flex-1"}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Sections/>}/>
                <Route path={"/thankyou"} element={<ThankYou/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
