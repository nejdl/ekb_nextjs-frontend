import { format } from 'date-fns';

const Event = ({ event, date, index, rerouteOnEventClick, handleSelectEvent, eventTypesData }) => {
    const title = event.eventTitle;
    const time = event.startTime;
    const eventTypes = event.eventType;
    const slug = event.slug;

    const handleClickOnEvent = () => {
        rerouteOnEventClick(slug);
        handleSelectEvent(event);
    }

    const getEventTypeColor = (type) => {
        const findEventTypeInData = eventTypesData.entries.find(x => x._id === type._id)
        const color = findEventTypeInData.color
        return color;
    } 

    return (
        <a
            key={index}
            className='event'
            onClick={handleClickOnEvent} >
            <li>
                {time 
                && <p className='time'>{time}</p>}
                <div>
                    <h3>{title}</h3>
                    {eventTypes
                    && eventTypes.map((( type, index ) => (
                        <p 
                            key={index}
                            className='eventType'
                            style={
                                {backgroundColor: getEventTypeColor(type)}
                            }
                            >
                            {/* <div 
                                className='eventTypeCircle'
                                style={
                                    {backgroundColor: getEventTypeColor(type)}
                                }>
                            </div> */}
                            {type.display}
                        </p>
                    )))}
                </div>
            </li>
        </a>
    )
}

export default Event; 