import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import About from "../../PagesAread/About/About";
import Home from "../../PagesAread/Home/Home";
import ListRM from "../../PagesAread/ListRM/ListRM";
import Page404 from "../../PagesAread/Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			 <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/list" element={<ListRM />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
