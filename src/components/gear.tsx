import * as React from 'react';

const Gear: React.FC = () => {

    return( 
    <div id='gear'>
        <h1>Gear</h1>
        <img src='../images/guitar2.png'/>
        <h2>2010 Ibanez AF75</h2>
        <div className='my-guitar'> 
            <div className='body'>
                <h3>Body</h3>
                <div className='specs'>
                    <span>Body Type:</span>
                    <span>Hollow Body</span>
                </div>
                <div className='specs'>
                    <span>Dimensions:</span>
                    <span>Length: 495mm / 19½"</span>
                    <span>Width: 400mm / 15¾"</span>
                    <span>Depth: 92mm / 3⅝"</span>
                </div>
                <div className='specs'>
                    <span>Top:</span>
                    <span>Material: Maple (laminated)</span>
                    <span>Binding: Ivory multi-ply</span>
                </div>
                <div className='specs'>
                    <span>Back/sides:</span>
                    <span>Material: Maple (laminated)</span>
                </div>
                <div className='specs'>
                    <span>Neck joint:</span>
                    <span>Set-in</span>
                </div>
                <div className='specs'>
                    <span>Bridge:</span>
                    <span>ART-1 on a wooden base</span>   
                </div>
            </div>
            <div className='neck'>
                <h3>Neck</h3>
                <div className='specs'>
                    <span>Neck material:</span>                    
                    <span>1-piece mahogany</span>
                </div>
                <div className='specs'>
                    <span>Scale length:</span>
                    <span>628mm/24¾</span>
                </div>
                <div className='specs'>
                    <span>Fingerboard Material:</span>
                    <span>Rosewood w/ ivory binding</span>
                </div>
                <div className='specs'>
                    <span>Fingerboard inlays:</span>
                    <span>Pearl block</span>
                </div>
                <div className='specs'>
                    <span>Frets:</span>
                    <span>20 / large</span>
                </div>
            </div>
            <div className='other'>
                <h3>Other</h3>
                <div className='specs'>
                     <span>Neck pickup:</span>   
                     <span>Ibanez Artcore Humbucker 1</span>
                </div>
                <div className='specs'>
                    <span>Strings:</span>
                    <span>D'addario flat wound ECG25</span>
                    <span>.012/.016/.024w/.032/.042/.052</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Gear;
