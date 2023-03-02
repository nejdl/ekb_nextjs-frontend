import parse from 'html-react-parser';

import { useState } from 'react';

import Block from '../Block/Block';

const Accordion = ({ content }) =>  {
    const accordionTitle = content.accordionTitle; 
    const accordionText = content.accordionText; 

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const handleAccordionClick = () => {
        setIsAccordionOpen(!isAccordionOpen);
    }

    return (
        <Block 
            content={accordionTitle}>
            <div 
                className='accordionTitle'
                onClick={handleAccordionClick}>
                <div>
                    {accordionTitle}
                </div>
                <div className='accordionIconContainer'>
                    <div className={`accordionIcon ${isAccordionOpen ? 'open' : ''}`}></div>
                </div>
            </div>
            {isAccordionOpen
            && <div 
                className='accordionText'>
                {parse(`${accordionText}`)}
            </div> }
        </Block>
    )
}

export default Accordion;