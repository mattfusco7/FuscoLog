import './styles/header.css';
import logo from './images/logo.jpg';

function Header(props) {

    return (
        <>
            <img src={logo} alt="logo" id="logo-img" />
            {props.isSignIn &&
                <div id="main_desc">
                    <h2>Welcome!</h2>
                    Click the sign up link below to make a free account and start logging your training.
                    Contact <a href="mailto: mjf328@cornell.edu">Matt Fusco</a> with questions.
                </div>
            }
        </>
    );
}

export default Header;