import './styles/footer.css';

function Footer(props) {
    function handleLogOut() {

    }


    return (
        <div className="logOut-btn" onClick={handleLogOut}>
            Log Out
        </div>
    );
}

export default Footer;