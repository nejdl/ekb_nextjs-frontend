import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { subHours, startOfMonth, parseISO } from 'date-fns';
import { MonthlyBody, MonthlyDay, MonthlyCalendar } from '@zach.codes/react-calendar';
// import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
import '@zach.codes/react-calendar/dist/calendar-tailwind-no-reset.css';

import MonthlyNav from './MonthlyNav/MonthlyNav';
import Event from './Event/Event';
import EventOverlay from './EventOverlay/EventOverlay';

const Calendar = ({ isOpen, type, title, slug, content, eventTypesData, rerouteOnCardClick }) => {

    // scroll to top when closing
    const calendarSubcontainerRef = useRef(null);
    const scrollCalendarToTop = () => {
        calendarSubcontainerRef.current.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        scrollCalendarToTop();
    }, [isOpen])
            
    // set current month
    const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));

    // put events in eventArray
    const events = content.entries;
    let eventsArray = [];
    for (let i = 0; i < events.length; i++){
        const event = events[i];
        eventsArray.push({
            event: event,
            date: parseISO(event.startDate)
        })
    }

    // handle click on event
    const rerouteOnEventClick = (eventSlug) => {
        handleRoute(eventSlug);
    }

    // handle routing
    const router = useRouter();

    const handleRoute = (eventSlug) => {
        // shallow routing on
        const routerOptions = {
            shallow: true,
        };

        // set url options according to slug
        let urlOptions = {
            // pathname: '/' + slug + '/' + eventSlug
            pathname: '/' + eventSlug
        };
        
        // FIX ROUTING ISSUE TO INDEX FROM /[SLUG]
        // route to ekb card (whose slug is null)
        if(!slug || rerouteToIndex){
            // check if coming from a /[slug] url
            if(router.pathname !== '/'){
                // route to path with redirect
                router.push(router.basePath + '/', urlOptions, routerOptions);
            } else {
                // route to path with asPathname
                router.push(router.pathname, urlOptions, routerOptions);
            }
        } else {
            // route to slug cards
            // route to path with asPathname
            router.push(router.pathname, urlOptions, routerOptions);
        } 
    };

    // event overlay
    // open / close event overlay
    const [eventOverlayOpen, setEventOverlayOpen] = useState(false);

    // rerouting to /calendar/
    // will automatically close event overlay on rerender
    const rerouteToCalendar = () => {
        if(eventOverlayOpen){
            rerouteOnEventClick('');
        }
    }

    // select event
    const [selectedEvent, setSelectedEvent] = useState([]);
    const handleSelectEvent = (eventData) => {
        setSelectedEvent(eventData)
    }

    return (
        <div
            className={`card ${type} ${(isOpen || eventOverlayOpen) ? 'open' : ''} ${eventOverlayOpen ? 'eventOverlayOpen' : ''}`} 
            onClick={rerouteOnCardClick} >
            <div 
                ref={calendarSubcontainerRef}
                onClick={rerouteToCalendar}
                className='calendarSubcontainer' >
            <h1 className='title'>
                {title}
            </h1>

                <MonthlyCalendar
                    currentMonth={currentMonth}
                    onCurrentMonthChange={date => setCurrentMonth(date)} >
                    <MonthlyNav />
                    <MonthlyBody
                        events={eventsArray} >
                        <MonthlyDay
                            renderDay={events =>
                                events.map((event, index) => (
                                    <Event 
                                        key={index}
                                        event={event.event}
                                        date={event.date}
                                        rerouteOnEventClick={rerouteOnEventClick}
                                        handleSelectEvent={handleSelectEvent}
                                        eventTypesData={eventTypesData} />
                                ))
                            }
                        />
                    </MonthlyBody>
                </MonthlyCalendar>
            </div>

            <EventOverlay 
                eventOverlayOpen={eventOverlayOpen}
                setEventOverlayOpen={setEventOverlayOpen}
                toggleEventOverlay={eventOverlayOpen}
                router={router}
                rerouteOnEventClick={rerouteOnEventClick}
                rerouteToCalendar={rerouteToCalendar}
                content={content}
                eventTypesData={eventTypesData} />

        </div>
    )
};

export default Calendar;