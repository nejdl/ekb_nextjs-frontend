import { getBlockAccordingToType } from '../Block/getBlockAccordingToType';

import Block from '../Block/Block';

const TextBlock = ({ textBlock }) => {
    const type = textBlock.component;
    const content = textBlock.settings;

    // get text block according to type 
    const textBlockAccordingToType = getBlockAccordingToType(type, content);

    return (
        <Block
            content={type}>
            <div className='textItem'>
                {textBlockAccordingToType}
            </div>
        </Block>
    )
}

export default TextBlock;