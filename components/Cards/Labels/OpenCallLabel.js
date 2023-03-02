import { useState } from 'react';
import parse from 'html-react-parser';

const OpenCallLabel = ({ openCallLabelData, openCallLabelTop, openCallLabelLeft }) => {

    const openCallLabelText = openCallLabelData.text;
    const openCallLabelVisibility = openCallLabelData.visibility;

    const [isHidden, setIsHidden] = useState(false);

    const hideOpenCallLabel = () => {
        setIsHidden(true)
    }

    if(openCallLabelVisibility){
        return (
            <div 
                className={`label ${isHidden ? 'hidden' : ''}`}
                    style={{
                        top: openCallLabelTop + 'px',
                        left: openCallLabelLeft + 'px'
                    }}>
                <div 
                    className='closeButtonContainer'>
                    <div 
                        className='closeButton'
                        onClick={hideOpenCallLabel}>
                    </div>
                </div>
                {parse(`${openCallLabelText}`)}
            </div>
        )
    } else {
        return null;
    }

}

export default OpenCallLabel;