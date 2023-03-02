import InfoBoxBlock from './InfoBoxBlock';

const InfoBoxBlocks = ({ content }) => {
    const infoBoxBlocks = content.infoBox;
    
    // check if infoBox is not null / undefined / empty
    if(infoBoxBlocks){
        // check if infoBox has children
        if(infoBoxBlocks.length > 0){
            return (
                // return components within infoBox each as a infoBoxBlock
                <>
                    {infoBoxBlocks.map(( infoBoxBlock, index ) => {
                        return <InfoBoxBlock 
                            key={index}
                            infoBoxBlock={infoBoxBlock} />
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

export default InfoBoxBlocks;
