import { useState } from 'react';
import './signIn.css';
import SignUp from './signUpPage';
// import logo from './logo.jpg';

function SignIn(props) {
    const [isSignUp, setSignUp] = useState(false)

    const onClickSignIn = () => {
        // if user name and pwd correct:
        props.setIsSignedIn(!props.isSignedIn)
        //      if they have coach permission:
        //          set props.isCoach to true
        // else:
        // display error message
    }

    const onClickSignUp = () => {
        // display sign up page
        setSignUp(!isSignUp)
    }

    return isSignUp ?
        (
            <SignUp
                isSignedIn={props.isSignedIn}
                hasAccount={props.hasAccount}
                isCoach={props.isCoach}
            />
        ) :
        (
            <main>
                <h1>Welcome to Fusco Log!</h1>
                <div className="signForm">
                    <div className="formPair">
                        <label>Username: </label>
                        <input type="text" id="uName" />
                    </div>
                    <div className="formPair">
                        <label>Password: </label>
                        <input type="password" id="pwd" />
                    </div>
                    <div className="logIn-btn" onClick={onClickSignUp}>
                        Sign Up
                    </div>
                    <div className="logIn-btn" onClick={onClickSignIn}>
                        Log In
                    </div>
                </div>
            </main>
        );
}

export default SignIn;