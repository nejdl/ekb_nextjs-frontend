import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import Page from '../Types/Page/Page';
import Calendar from '../Types/Calendar/Calendar';
import Ekb from '../Types/Ekb/Ekb';

const Card = ({ type, title, slug, content, eventTypesData, firstCardSlug }) => {

    const router = useRouter();
    const cardRef = useRef(null);
    // let transitionTime = null;

    useEffect(() => {
        // transitionTime = getComputedStyle(document.documentElement).getPropertyValue('--transitionTime');
    })

    const rerouteOnCardClick = (event) => {

        // only change route on card click, if card is not yet opened
        if(!isOpen()){
            // change route
            handleRoute();
        } else {
            // check if clicked on title
            const clickOnTitle = event.target.classList.contains('title');
            
            if(clickOnTitle){
                // change route to index
                const rerouteToIndex = true;
                handleRoute(rerouteToIndex);
            }
        }
    }

    const handleRoute = (rerouteToIndex) => {
        // shallow routing on
        const routerOptions = {
            shallow: true,
        };

        // set url options according to slug
        let urlOptions = {
            pathname: '/'
        };

        if(slug && !rerouteToIndex){
            urlOptions = {
                pathname: '/' + slug
            };
        } else if (rerouteToIndex){
            urlOptions = {
                pathname: '/' + firstCardSlug
            };
        }

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

    // open card according to slug
    const isOpen = () => {
        if(slug){
            const firstUrlSlug = router.asPath.split('/')[1];
            return slug === firstUrlSlug;
        } else {
            return router.asPath === '/';
        } 
    }

    switch(type) {
        case 'page':
            return <Page 
                rerouteOnCardClick={rerouteOnCardClick}
                isOpen={isOpen()}
                type={type}
                title={title}
                slug={slug}
                content={content} />;
        case 'calendar':
            return <Calendar 
                rerouteOnCardClick={rerouteOnCardClick}
                isOpen={isOpen()}
                type={type}
                title={title}
                slug={slug}
                content={content}
                eventTypesData={eventTypesData} />;
        case 'ekb':
            return <Ekb 
                rerouteOnCardClick={rerouteOnCardClick}
                isOpen={isOpen()}
                type={type}
                title={title}
                slug={slug}
                content={content} />;
        default: 
            return <div>Error: Type not matched.</div>;
    }
}

export default Card;