import { getSingletonData, getCollectionData } from '../utils/getData';

import Cards from '../components/Cards/Cards';
import InterimsModal from '../components/InterimsModal/InterimsModal';

// IF YOU CHANGE SOMEHTING HERE
// ALSO CHANGE IT IN [...SLUG].JS
export const getStaticProps = async () => {
  const metaData = await getSingletonData('metaData');
  const ekbData = await getSingletonData('ekb');
  const openCallLabelData = await getSingletonData('openCall');
  const calendarDataWithOldSlug = await getSingletonData('calendar');
  // fix for overwriting slug of calendar and accessing calendar on '/'
  const calendarData = {
      ...calendarDataWithOldSlug,
      slug: ''
    }
  const eventsData = await getCollectionData('Events');
  const eventTypesData = await getCollectionData('eventTypes');
  // only show visible pages
  const allPagesData = await getCollectionData('pages');
  const visiblePages = allPagesData.entries.filter(x => x.visibility)
  const pagesData = {
    ...allPagesData, 
    entries: visiblePages
  }

  return {
    props: {
      metaData, 
      ekbData, 
      openCallLabelData,
      calendarData,
      eventsData,
      eventTypesData, 
      pagesData
    }
  };
}

const HomePage = ({ metaData, ekbData, openCallLabelData, calendarData, eventsData, eventTypesData, pagesData }) => {

  return (
    <>
    {/* <InterimsModal /> */}
    <Cards 
      metaData={metaData}
      ekbData={ekbData}
      openCallLabelData={openCallLabelData}
      calendarData={calendarData}
      eventsData={eventsData}
      eventTypesData={eventTypesData}
      pagesData={pagesData}
      />
    </>
  )
}

export default HomePage;
