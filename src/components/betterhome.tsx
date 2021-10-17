import * as React from 'react';
import { NavLink } from 'react-router-dom';

function ClickBuy(){
    document.querySelector('nav').style.display = "none";
}

/*  <h2>Some Other Time (Video)</h2>
 
    <iframe 
    loading='lazy'
    width="100%" height="100%"
    src="https://www.youtube.com/embed/JR--I7zmunw" 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    scrolling="no"
    frameBorder="0">

    </iframe>
*/
const BetterHome: React.FC = () => {
    
    return(
    <>

    <div className='home-container'>
        <h1>New Album <span>Cloud Taster</span> Available Now</h1>

        <div className='home-album-buttons'>
            <img src='./././images/album.png'></img>  
            <div className='home-buttons'>
                <NavLink 
                activeClassName='active' 
                to='/showcase'>
                    <button>
                        Listen
                    </button>
                </NavLink>

                <NavLink activeClassName='active' to='/stribe' 
                onClick={ () => ClickBuy()}>
                    <button>
                        Buy
                    </button>
                </NavLink>
            </div>
        </div>

    
        
    <div className='about-album'>
        <h1>ABOUT CLOUD TASTER</h1>
        <p>The vibrations of the strings. The sustained ringing of the sound holes. Even the smell of wood polish. This is why I can't leave this instrument alone.</p><br/>
        <p>This album is just a man with his guitar. Nothing written out and pre-planned. Play through the song once and a second time very freely. Improvise the entire thing. I added a tiny bit of reverb and that is it.</p><br/>
        <p>This whole Covid-19 thing gave me the time to really sit down and work on my weaknesses on the instrument. It is a tricky instrument that only spending a lot of time with it can you get comfortable with it's peculiarities. Learning to improvise over a song's structure is such a pleasure.</p>
        <p>The songs I've picked here for some reason or another have stuck to me. </p>
        <p></p>
    </div>
    </div>
        
    </>
    );
};

export default BetterHome;