import './styles/profile.css';
import { Link } from "react-router-dom";

function Profile(props) {

    return (
        <>
            <h3>Email: {props.currentUser.email} </h3>
            <Link className="update-btn" to="/update-profile">
                Update Profile
            </Link>
        </>
    );
}

export default Profile;