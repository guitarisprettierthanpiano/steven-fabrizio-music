 import * as React from 'react';

const Gear: React.FC = () => {

    return( 
    <div id='gear-container'>
        <h1>Gear</h1>
        <img loading='lazy' id='af75' src='../images/guitar3.png'/>
        <h2 id='af75-h2'>2010 Ibanez AF75 BS</h2>
        <div className='my-guitar'> 
            <div className='body'>
                <h3>Body</h3>
                <div className='specs'>
                    <span data-aos='flip-up'>Body Type:</span>
                    <span data-aos='flip-up'>Hollow Body</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Dimensions:</span>
                    <span data-aos='flip-up'>Length: 495mm / 19½"</span>
                    <span data-aos='flip-up'>Width: 400mm / 15¾"</span>
                    <span data-aos='flip-up'>Depth: 92mm / 3⅝"</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Top:</span>
                    <span data-aos='flip-up'>Material: Maple (laminated)</span>
                    <span data-aos='flip-up'>Binding: Ivory multi-ply</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Back/sides:</span>
                    <span data-aos='flip-up'>Material: Maple (laminated)</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Neck joint:</span>
                    <span data-aos='flip-up'>Set-in</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Bridge:</span>
                    <span data-aos='flip-up'>ART-1 on a wooden base</span>   
                </div>
            </div>
            <div className='neck'>
                <h3>Neck</h3>
                <div className='specs'>
                    <span data-aos='flip-up'>Neck material:</span>                    
                    <span data-aos='flip-up'>1-piece mahogany</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Scale length:</span>
                    <span data-aos='flip-up'>628mm / 24¾"</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Fingerboard Material:</span>
                    <span data-aos='flip-up'>Rosewood w/ ivory binding</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Fingerboard inlays:</span>
                    <span data-aos='flip-up'>Pearl block</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Frets:</span>
                    <span data-aos='flip-up'>20 / medium</span>
                </div>
            </div>
            <div className='other'>
                <h3>Other</h3>
                <div className='specs'>
                     <span data-aos='flip-up'>Neck pickup:</span>   
                     <span data-aos='flip-up'>Ibanez Artcore Humbucker 1</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Strings:</span>
                    <span data-aos='flip-up'>D'addario flat wound ECG25</span>
                    <span data-aos='flip-up'>.012/.016/.024w/.032/.042/.052</span>
                </div>
            </div>
        </div>
        <p className='guitar-paragraph'>Yup. An AF75. This guitar has similar dimensions and the same materials as the popular ES-175. Maple back and sides, mahogany neck, rosewood fretboard. The newer AF75s are built cheaply. Laurel, linden and walnut. Not good. Avoid those. My guitar has flatwound 12s with lowish action. It doesn't fight me when I play it. I know my limits on it. It can sound uneven but I think it adds charm to it. I would recommend it to anyone who is looking for a versatile electric guitar.</p>
        <img loading="lazy" id='focusrite'src='../images/focusrite.png'/>
        <h2 id='fr-h2'>Focusrite Solo</h2>
        <div className='my-focusrite'>
            <div className='fr-specs'>
                <h3>Specs</h3>
                <div className='specs'>
                    <span data-aos='flip-up'>Inputs:</span>
                    <span data-aos='flip-up'>3-pin XLR</span>
                    <span data-aos='flip-up'>¼" input jack</span>
                </div>
                <div className='specs'>
                    <span data-aos='flip-up'>Outputs:</span>
                    <span data-aos='flip-up'>2 x ¼" speaker jacks</span>
                    <span data-aos='flip-up'>¼" output jack</span>
                </div>
            </div>
        </div>
        <p className='focusrite-paragraph'>This is the amplifier I use. What is the purpose of an amplifier? To amplify the natural acoustic sound of the instrument. This is something I think today's guitarists forget sometimes. I just want something to amplify the acoustic sound of my instrument. It has no effects but I can plug headphones into it and hear latency-less amplification. I can digitally add effects online if I need them. I can record with it. The truth is I play unplugged most of the time anyway! I like the acoustic sound of my guitar. But even when I plug it in I like the slight natural overdrive of the neck pickup that comes through the focusrite. If I were to get real serious as a musician I would upgrade this but I play just because music is fun and that is good enough for me.</p>
    </div>
    );
};

export default Gear;
