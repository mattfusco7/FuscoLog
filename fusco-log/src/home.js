import './styles/home.css';
import NavBar from './navBar';

function Home(props) {
    return (
        <>
            <NavBar />
            <div id="home-main">
                <h2>Home</h2>
                <h3>Current Weekly Running Mileage: </h3>
                <h3>Current Weekly Biking Time: </h3>
            </div>
        </>
    );
}

export default Home;