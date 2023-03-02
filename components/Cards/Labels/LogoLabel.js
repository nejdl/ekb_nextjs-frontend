import { useState } from 'react';
import parse from 'html-react-parser';

const LogoLabel = ({ logoLabelTop, logoLabelLeft }) => {

    const [isHidden, setIsHidden] = useState(false);

    const hideLabel = () => {
        setIsHidden(true)
    }

    return (
        <div 
            className={`label logo ${isHidden ? 'hidden' : ''}`}
            style={{
                top: logoLabelTop + 'px',
                left: logoLabelLeft + 'px'
            }}>
            <div 
                className='closeButtonContainer'>
                <div 
                    className='closeButton'
                    onClick={hideLabel}>
                </div>
            </div>
            <div className='logoContainer'>
                <img 
                    src='/assets/imgs/EKBlogo_300px.png'
                    />
            </div>
        </div>
    )

}

export default LogoLabel;