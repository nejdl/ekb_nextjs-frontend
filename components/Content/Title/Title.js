import Block from '../Block/Block';

const Title = ({ content }) => {
    let title = content.title; 

    return (
        <Block 
            content={title} >
            <h1 className='title'>
                {title}
            </h1>
        </Block>
    )
}

export default Title;