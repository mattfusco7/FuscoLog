import './styles/profile.css';
import NavBar from './navBar';
import { useState } from "react";
import { useAuth } from './contexts/AuthContext';
import { useNavigate } from "react-router-dom";

function Profile(props) {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    async function handleLogOut() {
        setError('')
        try {
            await logout()
            navigate('/signin')
        } catch {
            setError('Failed to log out.')
        }
    }

    return (
        <>
            <NavBar onProfile={true} />
            <div id="profile-main">
                <h1>Profile</h1>
                <h3>Email: {currentUser.email} </h3>
                <div className="logout-btn" onClick={handleLogOut}>
                    Log out
                </div>
                {error && <div className="errorDiv">
                    {error}
                </div>}
            </div>
        </>
    );
}

export default Profile;