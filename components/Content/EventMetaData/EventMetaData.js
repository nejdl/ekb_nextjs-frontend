import { format, parseISO } from 'date-fns'
import parse from 'html-react-parser';

import Block from '../Block/Block';
import EventTypes from './EventTypes';

const EventMetaData = ({ content, eventTypesData }) => {
    const startDate = content.startDate;
    const startTime = content.startTime;
    const endTime = content.endTime;
    const location = content.location;
    const eventTypes = content.eventType;

    // format date
    let formattedDate = startDate;
    if(startDate){
        const date = startDate.split('-');
        formattedDate = `${date[2]}.${date[1]}.${date[0]}`;
    }

    // format time
    let formattedTime = startTime;
    if (endTime){
        if(endTime !== startTime){
            formattedTime = startTime + ' – ' + endTime;
        }
    }
    
    return (
        <div className='eventMetaData'>
            <EventTypes 
                content={content}
                eventTypesData={eventTypesData} />
            <Block
                content={formattedDate} >
                <div
                    className='infoBoxItem'>
                    {formattedDate}
                </div>
            </Block>
            <Block
                content={formattedTime} >
                <div
                    className='infoBoxItem'>
                    {formattedTime}
                </div>
            </Block>
            <Block
                content={location} >
                <div
                    className='infoBoxItem'>
                    {parse(`${location}`)}
                </div>
            </Block>
        </div>
    )
}

export default EventMetaData;