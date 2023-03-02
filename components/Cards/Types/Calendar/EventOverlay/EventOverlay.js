import { useEffect, useState, useRef } from "react";
import Content from '../../../../Content/Content';

const EventOverlay = ({ eventOverlayOpen, setEventOverlayOpen, router, rerouteOnEventClick, rerouteToCalendar, content, eventTypesData }) => {

    // scroll to top when opening
    const eventOverlayRef = useRef(null);
    const scrollEventOverlayToTop = () => {
        eventOverlayRef.current.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        scrollEventOverlayToTop();
    }, [eventOverlayOpen])
            
    // close / open event overlay depending on slug
    const firstUrlSlug = router.asPath.split('/')[1];
    // const secondUrlSlug = router.asPath.split('/')[2];

    const closeEventOverlay = () => {
        setEventOverlayOpen(false);
    }
    const openEventOverlay = () => {
        setEventOverlayOpen(true);
    }

    // get event from slug
    const [currentEvent, setCurrentEvent] = useState();
    const getEventFromSlug = () => {
        const events = content.entries;
        const eventAccordingToSlug = events.find(x => x.slug === firstUrlSlug)
        return eventAccordingToSlug;
    }

    useEffect(() => {
        // if(firstUrlSlug != undefined){
        if(getEventFromSlug()){
            openEventOverlay();
            setCurrentEvent(getEventFromSlug);
        } else {
            closeEventOverlay();
        }
    })

    return (
        <div
            className={`eventOverlay ${eventOverlayOpen ? 'open' : ''}`}
            ref={eventOverlayRef}>
            <div 
                className='closeButtonContainer'>
                <div 
                    className='closeButton'
                    onClick={rerouteToCalendar}>
                </div>
            </div>

            {currentEvent 
            &&  
                <Content 
                    content={currentEvent}
                    eventTypesData={eventTypesData} />
            }

        </div>
    )
}

export default EventOverlay;