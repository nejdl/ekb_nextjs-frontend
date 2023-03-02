import Block from '../Block/Block';

const EventTitle = ({ content }) => {
    const eventTitle = content.eventTitle; 

    return (
        <Block 
            content={eventTitle} >
            <h1 className='eventTitle'>
                {eventTitle}
            </h1>
        </Block>
    )
}

export default EventTitle;