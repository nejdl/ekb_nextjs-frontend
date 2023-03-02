import { useEffect, useState } from 'react'
import { useWindowSize } from '@react-hook/window-size'

import OpenCallLabel from './OpenCallLabel';
import LogoLabel from './LogoLabel';

const Labels = ({ openCallLabelData }) => {

    const [width, height] = useWindowSize()
    const [openCallLabelTop, setOpenCallLabelTop] = useState(0);
    const [openCallLabelLeft, setOpenCallLabelLeft] = useState(0);
    const [logoLabelTop, setLogoLabelTop] = useState(0);
    const [logoLabelLeft, setLogoLabelLeft] = useState(0);

    // FIX ME: set style different way than inline?
    let labelRadius = 0;
    
    useEffect(() => {
        labelRadius = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--labelRadius'), 10);
        calculateOpenCallLabelPosition();
        calculateLogoLabelPosition();
    }, [width, height])

    const calculateRandomPosition = () => {
        const topMax = height - ((labelRadius / 4) * 3);
        const randomTop = Math.floor(Math.random() * topMax);
        const leftMax = width - ((labelRadius / 4) * 3);
        const randomLeft = Math.floor(Math.random() * leftMax);
        return [randomTop, randomLeft];
    }

    const calculateOpenCallLabelPosition = () => {
        const [randomTop, randomLeft] = calculateRandomPosition();
        setOpenCallLabelTop(randomTop);
        setOpenCallLabelLeft(randomLeft);
    }

    const calculateLogoLabelPosition = () => {
        const [randomTop, randomLeft] = calculateRandomPosition()
        setLogoLabelTop(randomTop);
        setLogoLabelLeft(randomLeft);
    }

    return (
        <>
            <OpenCallLabel 
                openCallLabelTop={openCallLabelTop}
                openCallLabelLeft={openCallLabelLeft}
                openCallLabelData={openCallLabelData} />
                
            <LogoLabel 
                logoLabelTop={logoLabelTop}
                logoLabelLeft={logoLabelLeft} />
        </>
    )
}

export default Labels;