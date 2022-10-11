
import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
            <AboutMe />
        </BrowserRouter>
    )
}

export default Routes