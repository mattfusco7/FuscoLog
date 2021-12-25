import './signIn.css';

function SignUp(props) {

    return (
        <>
            <div className="signForm">
                <div className="formPair">
                    <label>Set Username: </label>
                    <input type="text" />
                </div>
                <div className="formPair">
                    <label>Set Password: </label>
                    <input type="password" />
                </div>
            </div>
        </>
    );
}

export default SignUp;