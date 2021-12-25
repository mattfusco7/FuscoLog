import './styles/footer.css';

function Footer(props) {
    return (
        <>
            <div className="logOut-btn" onClick={props.handleLogOut}>
                Log Out
            </div>
            <div className="errorDiv-footer">
                {props.error}
            </div>
        </>
    );
}

export default Footer;