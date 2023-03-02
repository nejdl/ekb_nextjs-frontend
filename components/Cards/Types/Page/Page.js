import { useEffect, useRef } from 'react';
import Content from '../../../Content/Content';

const Page = ({ isOpen, type, title, slug, content, rerouteOnCardClick }) => {

    // scroll to top when closing
    const thisCard = useRef(null);
    const scrollCardToTop = () => {
        thisCard.current.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        scrollCardToTop();
    }, [isOpen])

    return (
        <div
            ref={thisCard}
            className={`card ${type} ${isOpen ? 'open' : ''}`} 
            onClick={rerouteOnCardClick} >
            {/* style={
                {backgroundColor: content.color}
            }  */}

            <Content 
                content={content} />

        </div>
    )
}

export default Page;
