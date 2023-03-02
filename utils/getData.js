import { backendUrl, apiToken } from './backendUrl';

export const getSingletonData = async (singletonName) => {
    
    const data = await fetch(backendUrl + '/singletons/get/' + singletonName + apiToken)
    .then(response => response.json())
    .then(response => { return response });

    return data;

}

export const getCollectionData = async (collectionName) => {
    
    const data = await fetch(backendUrl + '/collections/get/' + collectionName + apiToken)
    .then(response => response.json())
    .then(response => { return response });

    return data;

}

export const getSlugsOfCollectionEntries = async (collectionName) => {

    const data = await fetch(backendUrl + '/collections/get/' + collectionName + apiToken)
    .then(response => response.json())
    .then(response => { return response });


    return data.entries.map(({ slug }) => {
        return {
            params: {
                slug: [slug],
            }
        }
    });

}

export const getSlugsAndVisibilityOfCollectionEntries = async (collectionName) => {

    const data = await fetch(backendUrl + '/collections/get/' + collectionName + apiToken)
    .then(response => response.json())
    .then(response => { return response });


    return data.entries.map(({ slug, visibility }) => {
        return {
            params: {
                slug: [slug],
                visibility: [visibility]
            }
        }
    });

}

export const getSlugsOfCollectionEntriesAfterSingeltonSlug = async (singeltonNameForSlug1, collectionNameForSlug2) => {

    // get slugs of collection entries
    const data = await fetch(backendUrl + '/collections/get/' + collectionNameForSlug2 + apiToken)
    .then(response => response.json())
    .then(response => { return response });

    // get slug of singleton
    const slug1 = await getSingletonData(singeltonNameForSlug1)
    .then(data => { return data.slug })

    return data.entries.map(({ slug }) => {
        return {
            params: {
                slug: [ slug1 , slug ],
            }
        }
    });

}