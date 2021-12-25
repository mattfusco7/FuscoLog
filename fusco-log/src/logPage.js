import './styles/log.css';
import Calendar from 'react-calendar';
import Footer from './footer';
import { useState } from "react";
import { useAuth } from './contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import NavBar from './navBar';

function Log(props) {
    const [error, setError] = useState('')
    const { logout } = useAuth()
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
            <NavBar />
            <div id="calendarDiv">
                <Calendar />
            </div>
            <Footer
                error={error}
                setError={setError}
                handleLogOut={handleLogOut} />
        </>
    );
}

export default Log;