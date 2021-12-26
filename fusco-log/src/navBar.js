import './styles/navBar.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import thumbnail from "./images/thumbnail.png"

function NavBar(props) {
    const location = useLocation()
    const navigate = useNavigate()

    function togglePage() {
        if (location.pathname === "/profile") {
            navigate(-1)
        } else {
            navigate("/profile")
        }
    }

    return (
        <div className="sticky">
            <img src={thumbnail} alt="logo" id="thumbNav" onClick={togglePage} />
            <ul id="navJ">
                <Link to="/">Home</Link>
                <Link to="/log">My Log</Link>
                <div className="dot"></div>
            </ul>
        </div>
    );
}

export default NavBar;