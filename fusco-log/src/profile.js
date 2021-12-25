import './styles/profile.css';
import { Link } from "react-router-dom";
import { useAuth } from './contexts/AuthContext';
import NavBar from './navBar';

function Profile(props) {
    const { currentUser } = useAuth()

    return (
        <>
            <NavBar />
            <div id="profile-main">
                <h1>Profile</h1>
                <h3>Email: {currentUser.email} </h3>
                <Link className="update-btn" to="/settings">
                    Settings
                </Link>
            </div>
        </>
    );
}

export default Profile;