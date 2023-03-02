import { backendUrlForAssets } from '../../../utils/backendUrl';

import Block from '../Block/Block';

const File = ({ content }) =>  {
    const asset = content.asset; 
    // return no component, if there is no asset
    if (!asset){
        return null;
    }

    // else get asset url 
    const assetUrl = backendUrlForAssets + asset.path; 

    // get asset title
    // set title to file name
    let assetTitle = asset.path.split('/')[4]
    // if file name cannot be retrieved use generic title
    if(!assetTitle){
        assetTitle = 'Download';
    }
    // if specific title is defined use as title 
    if(asset.title){
        assetTitle = asset.title;
    }

    return (
        <Block 
            content={asset}>
            <div 
                className='fileDownload'>
                <img 
                    className='downloadIcon'
                    src='/assets/imgs/download-icon.png' 
                    alt='download icon' />
                <a 
                    href={assetUrl} >
                    {assetTitle}
                </a>
            </div>
        </Block>
    )
}

export default File;