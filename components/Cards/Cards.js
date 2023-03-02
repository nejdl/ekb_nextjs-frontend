import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import { set100Vh } from '../../utils/set100Vh';
import { reloadOnResize } from '../../utils/reloadOnResize';

// import ReactGA from 'react-ga';

import HtmlHead from '../HtmlHead/HtmlHead';
import Link from 'next/link';
import Card from './Card/Card';
import Labels from './Labels/Labels';

const Cards = ({
  metaData,
  ekbData,
  openCallLabelData,
  calendarData,
  eventsData,
  eventTypesData,
  pagesData,
}) => {
  const firstCardSlug = ekbData.slug;
  // useEffect(() => {
  // // Google Analytics
  // ReactGA.initialize('');
  // ReactGA.pageview(pageSlug);
  // }, [])

  useEffect(() => {
    // 100vh fix for mobile
    set100Vh();
    // reload on resize
    reloadOnResize();
    // smooth scroll polyfill
    smoothscroll.polyfill();
  });

  return (
    <div className="siteBody">
      <HtmlHead metaData={metaData} pageTitle={metaData.title} />

      {pagesData.entries.map((page) => (
        <Card
          key={page.slug}
          type="page"
          title={page.title}
          slug={page.slug}
          content={page}
          firstCardSlug={firstCardSlug}
        />
      ))}

      <Card
        type="calendar"
        title={calendarData.title}
        slug={calendarData.slug}
        content={eventsData}
        eventTypesData={eventTypesData}
        firstCardSlug={firstCardSlug}
      />

      <Card
        type="ekb"
        title={ekbData.title}
        slug={ekbData.slug}
        content={ekbData}
        firstCardSlug={firstCardSlug}
      />

      <Labels openCallLabelData={openCallLabelData} />
    </div>
  );
};

export default Cards;
