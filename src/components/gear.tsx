import * as React from 'react';

const Gear: React.FC = () => {

    return( 
    <div id='gear'>
        <h1>Gear</h1>
        <img id='af75' src='../images/guitar2.png'/>
        <h2 id='af75-h2'>2010 Ibanez AF75</h2>
        <div className='my-guitar'> 
            <div className='body'>
                <h3>Body</h3>
                <div className='specs'>
                    <span>Body Type:</span>
                    <span>Hollow Body</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Dimensions:</span>
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
                    <span>628mm / 24¾"</span>
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
                    <span>20 / medium</span>
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
        <p className='guitar-paragraph'>Yup. An AF75. Many guitarists scoff at this instrument. But this guitar has the same materials as the acclaimed ES-175. Maple back and sides, mahogany neck, rosewood fretboard. It is the new AF75s that are pathetic with their nyatoh, linden and laurel. My guitar has flatwound 12s with lowish action. I can truly say it doesn't fight me when I play it and that is priceless. It can sound uneven but if I were to upgrade to another guitar with the same materials it would cost a lot. I am satisfied with what it is.</p>
        <img id='focusrite'src='../images/focusrite.png'/>
        <h2 id='fr-h2'>Focusrite Solo</h2>
        <div className='my-focusrite'>
            <div className='fr-specs'>
                <h3>Specs</h3>
                <div className='specs'>
                    <span>Inputs:</span>
                    <span>3-pin XLR</span>
                    <span>¼" jack</span>
                </div>
                <div className='specs'>
                    <span>Outputs:</span>
                    <span>2 x ¼" speaker jacks</span>
                    <span>¼" output jack(use 3.5mm headphone adapter)</span>
                </div>
            </div>
        </div>
        <p className='focusrite-paragraph'>This is the amplifier I use. I wish guitarists would ask themselves; what is the purpose of an amplifier? To amplify the NATURAL ACOUSTIC sound of their guitar. Not suffocate it with generic trendy effects. That is all I look for with my Focusrite. It has no effects but I can plug headphones into it and hear latency-less amplification. But I can find pseudo-effects online If I did need to use them. I can digitally record with it. Yet the truth is I play unplugged most of the time anyway! Look at any of my uploaded videos and check if there is an amp on or headphones on. I like the acoustic sound of my guitar. But even when I plug it in I like the slight natural overdrive of the neck pickup that comes through the focusrite. If I were to get real serious as a musician I would upgrade this but I play just because it is fun and that is good enough for me.</p>
    </div>
    );
};

export default Gear;
