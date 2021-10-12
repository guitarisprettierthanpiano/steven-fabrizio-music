import * as React from 'react';
import { NavLink } from 'react-router-dom';

const BetterHome: React.FC = () => {
    
    return(
    <>

    <div className='home-container'>
        <h1>New Album <span>Cloud Taster</span> Available Now</h1>

        <div className='home-album-buttons'>
            <img src='./././album.png'></img> 
            <div className='home-buttons'>
                <NavLink activeClassName='active' to='/showcase'>
                    <button>
                        Listen
                    </button>
                </NavLink>
                <button id='buy-button'
                onClick = {() => console.log('Checkout')}>
                    Buy
                </button>
            </div>
        </div>

        <h2>Some Other Time (Video)</h2>
 
        <iframe 
            width="100%" height="100%"
            src="https://www.youtube.com/embed/JR--I7zmunw" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            scrolling="no"
            frameBorder="0">

        </iframe>
        
    </div>
        
    </>
    );
};

export default BetterHome;