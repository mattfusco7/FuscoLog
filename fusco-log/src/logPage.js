import './styles/log.css';
import Calendar from 'react-calendar';
import Footer from './footer';
import Profile from './profile';
import { useState } from "react";
import { useAuth } from './contexts/AuthContext';
import { useNavigate } from "react-router-dom";

function Log(props) {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
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
            <h2>About</h2>
            <p>This web app serves two equally important purposes. One, to help
                with Hendo's log collection and make the weekly log process
                simpler for everyone. And two, to help put an end to the
                cancerous Strava culture that has overtaken Cornell Track and
                Field.</p>
            <Profile
                currentUser={currentUser}
                logout={logout} />
            <Calendar />
            <Footer
                error={error}
                setError={setError}
                handleLogOut={handleLogOut} />
        </>
    );
}

export default Log;