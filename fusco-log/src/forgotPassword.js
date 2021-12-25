import './styles/signIn.css';
import { useRef, useState } from 'react';
import Header from './header';
import { useAuth } from './contexts/AuthContext';
import { Link } from "react-router-dom";


function ForgotPassword(props) {
    const EmailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(EmailRef.current.value)
            setMessage('Check your email inbox for further instructions.')
        } catch {
            setError('Failed to reset password.')
        }

        setLoading(false)

    }

    return (
        <main>
            <Header isSignIn={false} />
            {error &&
                <div className="errorDiv">
                    {error}
                </div>}
            {message && <div className="errorDiv">
                {message}
            </div>}
            <form className="signForm" onSubmit={handleSubmit}>
                <div className="formPair">
                    <label>Email: </label>
                    <input type="email" id="EMail" ref={EmailRef} required={true} />
                </div>
                <button className="logIn-btn" type="submit" disabled={loading}>
                    Reset Password
                </button>
                <div className="bottomSignInLabel">
                    <Link className="link" to="/signup">Need an account? Sign up.</Link>
                </div>
                <div className="bottomSignInLabel forgot">
                    <Link className="link" to="/signin">Log in.</Link>
                </div>
            </form>
        </main>
    );
}

export default ForgotPassword;