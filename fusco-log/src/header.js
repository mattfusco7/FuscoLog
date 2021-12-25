import './styles/header.css';
import logo from './images/logo.jpg';

function Header(props) {

    return (
        <>
            <img src={logo} alt="logo" id="logo-img" />
            {props.isSignIn &&
                <div id="main_desc">
                    <h2>Our Mission</h2>
                    To create a training log system built for the
                    Cornell Distance team and its coaches. (Fuck Strava, respectfully.)
                </div>
            }
        </>
    );
}

export default Header;