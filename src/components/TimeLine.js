import '../App.css';
import data from "../data"
import Event from "./Event";
import End from "./End";

const TimeLine = () => {
    const eventList = data.map((event) => (
        <Event key={event.id} event={event}/>
    ));
    return (
        <div className="timeline">
            <ul className="timeline">{eventList}</ul>  
            <End/>          
        </div>
    );
};

export default TimeLine;