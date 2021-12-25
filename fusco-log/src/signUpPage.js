import './signIn.css';
import Header from './header';

function SignUp(props) {

    return (
        <main>
            <Header />
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
        </main>
    );
}

export default SignUp;