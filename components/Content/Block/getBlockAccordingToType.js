import SimpleText from "../Text/SimpleText";
import Image from '../Image/Image';
import Embed from '../Embed/Embed';
import NewsletterSubscription from '../NewsletterSubscription/NewsletterSubscription';
import Accordion from '../Accordion/Accordion';
import File from '../File/File';

export const getBlockAccordingToType = (type, content) => {
    switch (type){
        case 'simpleText': 
            return <SimpleText
                content={content} />;
        case 'image': 
            return <Image 
                content={content} />;
        case 'embed':
            return <Embed 
                content={content} />;
        case 'newsletterSubscription': 
            return <NewsletterSubscription 
                content={content} />;
        case 'accordion': 
            return <Accordion 
                content={content} />;
        case 'file': 
            return <File 
                content={content} />;
        default: 
            console.log('Error: No block matched for type ' + type);
            return null;
    }
}