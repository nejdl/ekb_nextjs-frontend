import { useState } from 'react';

const InterimsModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    const closeModal = () => {
        setIsOpen(false);
    }

    return(
        <div className={`interimsModal ${isOpen ? 'open': ''}`}>
            <div className='closeButton' onClick={closeModal} >×</div>
            <h1>
                The Embodied Knowledge Bureau website is currently in the making. 
                Check back again soon for more information. 
            </h1>
        </div>
    )
}

export default InterimsModal;