import Title from './Title/Title';
import CoverImage from './Image/CoverImage';
import EventTitle from './Title/EventTitle';
import TextBlocks from './Text/TextBlocks';
import InfoBoxBlocks from './InfoBox/InfoBoxBlocks';
import EventMetaData from './EventMetaData/EventMetaData';

const Content = ({ content, eventTypesData }) => {
    
    return (
        <>
            <Title 
                content={content} />
            <CoverImage 
                content={content} />
            <EventTitle 
                content={content} />
            <div className='content'>
                <div className='rightSide'>
                    <EventMetaData 
                        content={content}
                        eventTypesData={eventTypesData} />
                    <InfoBoxBlocks 
                        content={content} />
                </div>
                <div className='leftSide'>
                    <TextBlocks 
                        content={content} />
                </div>
            </div>
        </>
    )
}

export default Content;