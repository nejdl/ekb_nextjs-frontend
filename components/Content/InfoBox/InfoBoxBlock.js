import { getBlockAccordingToType } from '../Block/getBlockAccordingToType';

import Block from '../Block/Block';

const InfoBoxBlock = ({ infoBoxBlock }) => {
    const type = infoBoxBlock.component;
    const content = infoBoxBlock.settings;

    // get text block according to type 
    const infoBoxBlockAccordingToType = getBlockAccordingToType(type, content);

    return (
        <Block
            content={type}>
            <div 
                className='infoBoxItem'>
                {infoBoxBlockAccordingToType}
            </div>
        </Block>
    )
}

export default InfoBoxBlock;