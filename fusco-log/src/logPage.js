import './styles/log.css';
import Calendar from 'react-calendar';
import NavBar from './navBar';

function Log(props) {
    return (
        <>
            <NavBar onProfile={false} />
            <div id="calendarDiv">
                <Calendar />
            </div>
        </>
    );
}

export default Log;