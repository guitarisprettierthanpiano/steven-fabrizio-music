import * as React from 'react';

const Footer: React.FC = () => {

    return(
    <div className='footer'>
        <span 
        style={{cursor:'pointer', color:'white'}}
        onClick={() => window.scrollTo({ top: 0, behavior:'smooth'})}
        id='top'>
            Top
        </span> 
        <span>Designed and Created by Steven Fabrizio 2021</span>
    </div>
    )
}

export default Footer;
