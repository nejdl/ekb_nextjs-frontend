import Block from '../Block/Block';

const EventTypes = ({ content, eventTypesData }) => {
    const eventTypes = content.eventType;

    const getEventTypeColor = (type) => {
        const findEventTypeInData = eventTypesData.entries.find(x => x._id === type._id)
        const color = findEventTypeInData.color
        return color;
    } 
    
    if (eventTypes){
        if(eventTypes.length < 1){
            return null;
        } else {
            return (
                <div
                    className='infoBoxItem'>
                    {eventTypes.map((eventType, index) => (
                        <p
                            key={index}
                            className='eventType'
                            style={
                                {backgroundColor: getEventTypeColor(eventType)}
                            } >
                            {eventType.display}
                        </p>
                    ))}
                </div>
            )
        }
    } else {
        return null;
    }

}

export default EventTypes;