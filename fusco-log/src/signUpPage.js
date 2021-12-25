import './styles/signIn.css';
import { useRef, useState } from 'react';
import Header from './header';
import { useAuth } from './contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";

function SignUp(props) {
    const setEmailRef = useRef()
    const setPwdRef = useRef()
    const conPwdRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (setPwdRef.current.value !== conPwdRef.current.value) {
            setError('Passwords do not match.')
            return error
        }

        try {
            setError('')
            setLoading(true)
            await signUp(setEmailRef.current.value, setPwdRef.current.value)
            navigate("/")
        } catch {
            setError('Failed to create an account.')
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
                    <input type="email" id="setEMail" ref={setEmailRef} required={true} />
                </div>
                <div className="formPair">
                    <label>Set Password: </label>
                    <input type="password" id="setPwd" ref={setPwdRef} required={true} />
                </div>
                <div className="formPair">
                    <label>Confirm Password: </label>
                    <input type="password" id="conPwd" ref={conPwdRef} required={true} />
                </div>
                <button className="logIn-btn" type="submit" disabled={loading}>
                    Create Account
                </button>
                <div className="bottomSignInLabel">
                    <Link className="link" to="/signin">Already have an account? Log in.</Link>
                </div>
            </form>
        </main>
    );
}

export default SignUp;