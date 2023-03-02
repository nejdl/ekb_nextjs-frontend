import { getSingletonData, getCollectionData, getSlugsOfCollectionEntries, getSlugsAndVisibilityOfCollectionEntries } from '../utils/getData';

import Cards from '../components/Cards/Cards';

export const getStaticPaths = async () => {
  const pagesPaths = await getSlugsAndVisibilityOfCollectionEntries('pages');
  // only pass visible page paths 
  // FIX ME: already only fetch visible pages via getData.js
  let visiblePagesPaths = []
  const findVisiblePagesPaths = pagesPaths.map(({ params }) =>  {
    if(params.visibility[0]){
      visiblePagesPaths.push( {
        params: params
      });
      return;
    }
  })
  // const eventsPaths = await getSlugsOfCollectionEntriesAfterSingeltonSlug('calendar', 'Events');
  const eventsPaths = await getSlugsOfCollectionEntries('Events');
  const ekbData = await getSingletonData('ekb');

  // extra path for accessing ekb or calendar singleton
  const extraPaths = {
    params: {
      slug: [ekbData.slug]
      // slug: ['calendarData.slug']
      // slug: ['calendar']
    }
  }
  
  // const paths = [...pagesPaths, ...eventsPaths];
  // const paths = [...pagesPaths, extraPaths, ...eventsPaths];
  const paths = [...visiblePagesPaths, extraPaths, ...eventsPaths];

  return {
    paths,
    fallback: false
  }
}

// IF YOU CHANGE SOMEHTING HERE
// ALSO CHANGE IT IN INDEX.JS
export const getStaticProps = async (props) => {
  const params = props.params;
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
  }
}

const Page = ({ metaData, ekbData, openCallLabelData, calendarData, eventsData, eventTypesData, pagesData }) => {

  return (
    <Cards 
      metaData={metaData}
      ekbData={ekbData}
      openCallLabelData={openCallLabelData}
      calendarData={calendarData}
      eventsData={eventsData}
      eventTypesData={eventTypesData}
      pagesData={pagesData}
      />
  )
}

export default Page;
