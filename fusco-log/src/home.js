import './styles/home.css';
import NavBar from './navBar';
// import { db } from './firebase'

function Home(props) {
    // function handleClick() {
    //     db.collection("testing").add({ "object": "please" })
    // }

    return (
        <>
            <NavBar />
            <div id="home-main">
                <h2>Home</h2>
                <h3>Current Weekly Running Mileage: </h3>
                <h3>Current Weekly Biking Time: </h3>
                {/* <div className="btn" onClick={handleClick}>Test Firestore</div> */}
            </div>
        </>
    );
}

export default Home;