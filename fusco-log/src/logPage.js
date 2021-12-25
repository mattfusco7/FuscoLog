import './styles/log.css';
import Calendar from 'react-calendar';
import Footer from './footer';

function Log(props) {

    return (
        <>
            <h2>About</h2>
            <p>This web app serves two equally important purposes. One, to help
                with Hendo's log collection and make the weekly log process
                simpler for everyone. And two, to help put an end to the
                cancerous Strava culture that has overtaken Cornell Track and
                Field.</p>
            <Calendar />
            <Footer />
        </>
    );
}

export default Log;