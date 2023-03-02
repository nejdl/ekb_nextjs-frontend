import parse from 'html-react-parser';

import Block from '../Block/Block';

const Embed = ({ content }) => {
    const embed = content.html;

    return (
        <Block 
            content={embed}>
            <div
                className='embed'>
                {parse(`${embed}`)}
            </div>
        </Block>
    )
}

export default Embed;