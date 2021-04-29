import * as React from 'react';

const GearSubComp = () => {
    
    let myArray = document.querySelectorAll('span')
    console.log('ewr');
    console.log(myArray);

    for (let i = 0; i<myArray.length; i++){
        myArray[i].setAttribute('data-aos','fade-up');
    }; 
    
    return(
    <>
    </>
    );
};

export default GearSubComp;