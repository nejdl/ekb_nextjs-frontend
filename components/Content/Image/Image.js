import { backendUrlForImages } from '../../../utils/backendUrl';

import Block from '../Block/Block';

const Image = ({ content }) =>  {
    const image = content.image; 
    // return no component, if there is no coverimage
    if (!image){
        return null;
    }

    // else get imageUrl
    const imageUrl = backendUrlForImages + image.path; 
    let subtitle = null;
    if(image.meta){
        subtitle = image.meta.title;
    }

    // set subtitle as altText in lack of actual alt text
    const altText = '';

    return (
        <Block 
            content={image}>
            <img 
                className='image'
                src={imageUrl} 
                alt={altText} />
            <Block
                content={subtitle} >
                <p className='subtitle'>
                    {subtitle}
                </p>
            </Block>
        </Block>
    )
}

export default Image;