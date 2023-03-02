import TextBlock from './TextBlock';

const TextBlocks = ({ content }) => {
    const textBlocks = content.text;
    
    // check if text is not null / undefined / empty
    if(textBlocks){
        // check if text has children
        if(textBlocks.length > 0){
            // return components within text each as a textBlock
            return (
                <>
                    {textBlocks.map(( textBlock, index ) => {
                        return <TextBlock 
                            key={index}
                            textBlock={textBlock} />
                    })}
                </>
            )
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export default TextBlocks;
