import * as React from 'react';

const Footer: React.FC = () => {

    return(
    <div className='footer'>
        <span 
        style={{cursor:'pointer'}}
        onClick={() => window.scrollTo({ top: 0, behavior:'smooth'})}>
            Top
        </span> 
    </div>
    )
}

export default Footer;
