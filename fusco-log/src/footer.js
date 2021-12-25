import './styles/footer.css';

function Footer(props) {
    return (
        <>
            <div id="logOut-div">
                <div className="logOut-btn" onClick={props.handleLogOut}>
                    Log Out
                </div>
            </div>
            <div className="errorDiv-footer">
                {props.error}
            </div>
        </>
    );
}

export default Footer;