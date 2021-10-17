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

<p>
                    The vibrations of the strings. The sustained ringing of the sound holes. Even the smell of wood polish. This is why I can't leave the guitar alone. It is such a blessing to be able to play personally satisfying music on an instrument.
                    </p><br />

<p>
                    This album is just a man with his guitar. Nothing written out or pre-planned. Improvise around each note as it comes. No tricks. Play through the melody once and again freely. The only modification was adding slight reverb. Mistakes are intentionally left in.</p><br/>

<p>
                    There isn't a reason for picking the songs that I did. I know a lot of songs but these came out when I sat down ready to play. I thought of keys I hadn't yet played in and picked songs that sound good in those keys. Enjoy the album!</p><br/>

<p>
                    Steven</p>
    <img loading='lazy' src='./././images/1emilyB.png'></img>
    <img loading='lazy' src='./././images/0imafooltowantyou.png'></img>
    </div>

    </div>   
    </>
    );
};

export default BetterHome;