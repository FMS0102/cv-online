
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
        </BrowserRouter>
    )
}

export default Routes