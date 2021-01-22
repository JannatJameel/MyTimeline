import '../App.css';

const Event = (props) => {
    const event = props.event;
    return (
    <li className="timeline-inverted">
        <div className="timeline-image"><img className="rounded-circle img-fluid" src={event.image} alt="" /></div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>{event.date}</h4>
                <h4 className="subheading">{event.location}</h4>
            </div>
            <div className="timeline-body"><p class="text-muted">{event.description}</p></div>
        </div>
    </li>
    );
};

export default Event;