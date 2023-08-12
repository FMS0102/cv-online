
import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
            <AboutMe />
            <Card />
            <Projects />
            <Contact />
            <Footer />
        </BrowserRouter>
    )
}

export default Routes