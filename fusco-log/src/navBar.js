import './styles/navBar.css';
import { Link } from "react-router-dom";

function NavBar(props) {

    return (
        <ul id="navJ">
            <Link to="/">Home</Link>
            <Link to="/settings">Profile</Link>
            <div className="dot"></div>
        </ul>
    );
}

export default NavBar;