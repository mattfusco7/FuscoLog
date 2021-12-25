import './styles/header.css';
import logo from './images/logo.jpg';

function Header(props) {

    return (
        <>
            <img src={logo} alt="logo" id="logo-img" />
        </>
    );
}

export default Header;