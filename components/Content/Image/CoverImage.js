import { backendUrlForImages } from '../../../utils/backendUrl';

import Block from '../Block/Block';

const CoverImage = ({ content }) =>  {
    const coverImage = content.coverImage; 
    // return no component, if there is no coverimage
    if (!coverImage){
        return null;
    } else if (coverImage.length !== undefined) {
        if (coverImage.length < 1){
            return null;
        }
    }

    // else get imageUrl
    const imageUrl = backendUrlForImages + coverImage.path; 
    let subtitle = null;
    if(coverImage.meta){
        subtitle = coverImage.meta.title;
    }
    
    // set subtitle as altText in lack of actual alt text
    const altText = subtitle;

    return (
        <Block 
            content={coverImage}>
            <div className='coverImageContainer'>
                <img 
                    className='coverImage'
                    src={imageUrl} 
                    alt={altText} />
            </div>
            <Block
                content={subtitle} >
                <p className='coverImageSubtitle'>
                    {subtitle}
                </p>
            </Block>
        </Block>
    )
}

export default CoverImage;