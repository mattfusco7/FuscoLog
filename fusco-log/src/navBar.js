import './styles/navBar.css';
import { Link } from "react-router-dom";
import thumbnail from "./images/thumbnail.png"

function NavBar(props) {

    return (
        <>
            <Link to="/">
                <img src={thumbnail} alt="logo" id="thumbNav" />
            </Link>
            <ul id="navJ">
                <Link to="/">Home</Link>
                <Link to="/settings">Profile</Link>
                <div className="dot"></div>
            </ul>
        </>
    );
}

export default NavBar;