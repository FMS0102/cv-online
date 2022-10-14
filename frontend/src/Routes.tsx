
import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
            <AboutMe />
            <Card />
        </BrowserRouter>
    )
}

export default Routes