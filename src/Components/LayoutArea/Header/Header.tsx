import "./Header.css";
import rick from "../../../Assets/Images/Rick_and_Morty.png";
function Header(): JSX.Element {
    return (
        <div className="Header">
			<img src={rick} alt="r&m" />
        </div>
    );
}

export default Header;
