import { set100Vh } from './set100Vh';

export const reloadOnResize = () => {
    let heightOld = window.innerHeight;

    window.onresize = function(){ 
        const heightNew = window.innerHeight;
        if (heightOld != heightNew){
            // location.reload(); 
            heightOld = heightNew;
            set100Vh();
        }
    }
}
