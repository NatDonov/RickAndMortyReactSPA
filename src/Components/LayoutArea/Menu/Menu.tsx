import "./Menu.css";
import { Link } from "react-router-dom";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <Link to="/home">Home</Link>
            <Link to="/list">Characters R&M</Link>
            <Link to="/about">About</Link>
            
			
        </div>
    );
}

export default Menu;
