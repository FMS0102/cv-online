
import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
            <AboutMe />
            <Card />
            <Projects />
        </BrowserRouter>
    )
}

export default Routes