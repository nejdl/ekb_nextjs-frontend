import Head from 'next/head';

import { backendUrlForImages } from '../../utils/backendUrl';

const HtmlHead = ({ pageTitle, metaData }) => {

    // meta data info
    const description = metaData.description;
    const keywords = metaData.keywords.join(', ');
    // get site url
    const siteUrl = 'https://embodiedknowledgebureau.goodbyebooks.org/';
    // if (typeof window !== 'undefined') {
    //     siteUrl = window.location.hostname;
    //     console.log(siteUrl)
    // }
    // share image url
    let shareImageUrl = '';
    if(metaData.shareImage){
        shareImageUrl = backendUrlForImages + metaData.shareImage.path
    }

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta charSet='UTF-8' />
            <meta 
                name='viewport' 
                content='width=device-width,initial-scale=1' />

            {/* DESCRIPTION / KEYWORDS */}
            <meta
                name='description'
                content={description}
            />
            <meta 
                name='keywords' 
                content={keywords} />

            {/* TWITTER & FB THUMBNAILS */}
            <meta 
                property='og:title' 
                content={pageTitle} />
            <meta 
                property='og:description' 
                content={description} />
            <meta 
                property='og:image' 
                content={shareImageUrl} />
            <meta 
                property='og:url' 
                content={siteUrl} />
            <meta 
                name='twitter:card' 
                content='summary_large_image' />
            
            {/* FAVICONS */}
            <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/favicon-16x16.png' />
            <link rel='manifest' href='/assets/favicon/site.webmanifest' />
            <link rel='mask-icon' href='/assets/favicon/safari-pinned-tab.svg' color='#000000' />
            <meta name='msapplication-TileColor' content='#000000' />
            <meta name='theme-color' content='#ffffff' />
    
        </Head>
    )
}

export default HtmlHead;