import './styles/signIn.css';
import { useRef, useState } from 'react';
import Header from './header';
import { useAuth } from './contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";


function SignIn(props) {
    const EmailRef = useRef()
    const PwdRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(EmailRef.current.value, PwdRef.current.value)
            navigate("/")
        } catch {
            setError('Failed to sign in.')
        }

        setLoading(false)

    }

    return (
        <main>
            <Header />
            {error &&
                <div className="errorDiv">
                    {error}
                </div>}
            <form className="signForm" onSubmit={handleSubmit}>
                <div className="formPair">
                    <label>Email: </label>
                    <input type="email" id="EMail" ref={EmailRef} required={true} />
                </div>
                <div className="formPair">
                    <label>Password: </label>
                    <input type="password" id="Pwd" ref={PwdRef} required={true} />
                </div>
                <button className="logIn-btn" type="submit" disabled={loading}>
                    Log In
                </button>
                <div className="bottomSignInLabel">
                    <Link className="link" to="/signup">Need an account? Sign up.</Link>
                </div>
            </form>
        </main>
    );
}

export default SignIn;