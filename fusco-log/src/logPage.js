import './log.css';
import Calendar from 'react-calendar';

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
        </>
    );
}

export default Log;