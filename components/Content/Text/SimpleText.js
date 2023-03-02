import parse from 'html-react-parser';

import Block from '../Block/Block';

const SimpleText = ({ content }) => {
    const text = content.text;

    const parseOptions = {
        replace: ({ attribs, children }) => {
            if(attribs){
                attribs.style = '';
            }
        }
    }

    return (
        <Block content={text}>
            {parse(`${text}`, parseOptions)}
        </Block>
    )
}

export default SimpleText;