import * as React from 'react';
import { useState } from 'react';

const CompletedSongs: React.FC = () => {

    const [YnFClass, setYnFClass] = useState<string>('show')
    const [SoTClass, setSoTClass] = useState<string>('none')
    const [WAYDClass, setWAYDClass] = useState<string>('none')
    const [WIFiLClass, setWIFiLClass] = useState<string>('none')
    const [ABClass, setABClass] = useState<string>('none')
    const [IIRClass, setIIRClass] = useState<string>('none')
    const [EClass, setEClass] = useState<string>('none')
    const [TSoYSClass, setTSoYSClass] = useState<string>('none')

    const [YnFDisplay, setYnFDisplay] = useState<string>('inline')
    const [SoTDisplay, setSoTDisplay] = useState<string>('none')
    const [WAYDDisplay, setWAYDDisplay] = useState<string>('none')
    const [WIFiLDisplay, setWIFiLDisplay] = useState<string>('none')
    const [ABDisplay, setABDisplay] = useState<string>('none')
    const [IIRDisplay, setIIRDisplay] = useState<string>('none')
    const [EDisplay, setEDisplay] = useState<string>('none')
    const [TSoYSDisplay, setTSoYSDisplay] = useState<string>('none')


    function ClickYnF(){
        StopAudioOnClick()

        setYnFClass('show')
        setSoTClass('none')
        setWAYDClass('none')
        setWIFiLClass('none')
        setABClass('none')
        setIIRClass('none')
        setEClass('none')
        setTSoYSClass('none')

        setYnFDisplay('inline')
        setSoTDisplay('none')
        setWAYDDisplay('none')
        setWIFiLDisplay('none')
        setABDisplay('none')
        setIIRDisplay('none')
        setEDisplay('none')
        setTSoYSDisplay('none')
    }
    function ClickSoT(){
        StopAudioOnClick()

        setYnFClass('none')
        setSoTClass('show')
        setWAYDClass('none')
        setWIFiLClass('none')
        setABClass('none')
        setIIRClass('none')
        setEClass('none')
        setTSoYSClass('none')

        setYnFDisplay('none')
        setSoTDisplay('inline')
        setWAYDDisplay('none')
        setWIFiLDisplay('none')
        setABDisplay('none')
        setIIRDisplay('none')
        setEDisplay('none')
        setTSoYSDisplay('none')
    }
    function ClickWAYD(){
        StopAudioOnClick()

        setYnFClass('none')
        setSoTClass('none')
        setWAYDClass('show')
        setWIFiLClass('none')
        setABClass('none')
        setIIRClass('none')
        setEClass('none')
        setTSoYSClass('none')

        setYnFDisplay('none')
        setSoTDisplay('none')
        setWAYDDisplay('inline')
        setWIFiLDisplay('none')
        setABDisplay('none')
        setIIRDisplay('none')
        setEDisplay('none')
        setTSoYSDisplay('none')
    }
    function ClickWIFiL(){
        StopAudioOnClick()

        setYnFClass('none')
        setSoTClass('none')
        setWAYDClass('none')
        setWIFiLClass('show')
        setABClass('none')
        setIIRClass('none')
        setEClass('none')
        setTSoYSClass('none')

        setYnFDisplay('none')
        setSoTDisplay('none')
        setWAYDDisplay('none')
        setWIFiLDisplay('inline')
        setABDisplay('none')
        setIIRDisplay('none')
        setEDisplay('none')
        setTSoYSDisplay('none')
    }
    function ClickAB(){
        StopAudioOnClick()

        setYnFClass('none')
        setSoTClass('none')
        setWAYDClass('none')
        setWIFiLClass('none')
        setABClass('show')
        setIIRClass('none')
        setEClass('none')
        setTSoYSClass('none')

        setYnFDisplay('none')
        setSoTDisplay('none')
        setWAYDDisplay('none')
        setWIFiLDisplay('none')
        setABDisplay('inline')
        setIIRDisplay('none')
        setEDisplay('none')
        setTSoYSDisplay('none')
    }
    function ClickIIR(){
        StopAudioOnClick()

        setYnFClass('none')
        setSoTClass('none')
        setWAYDClass('none')
        setWIFiLClass('none')
        setABClass('none')
        setIIRClass('show')
        setEClass('none')
        setTSoYSClass('none')

        setYnFDisplay('none')
        setSoTDisplay('none')
        setWAYDDisplay('none')
        setWIFiLDisplay('none')
        setABDisplay('none')
        setIIRDisplay('inline')
        setEDisplay('none')
        setTSoYSDisplay('none')
    }
    function ClickE(){
        StopAudioOnClick()

        setYnFClass('none')
        setSoTClass('none')
        setWAYDClass('none')
        setWIFiLClass('none')
        setABClass('none')
        setIIRClass('none')
        setEClass('show')
        setTSoYSClass('none')

        setYnFDisplay('none')
        setSoTDisplay('none')
        setWAYDDisplay('none')
        setWIFiLDisplay('none')
        setABDisplay('none')
        setIIRDisplay('none')
        setEDisplay('inline')
        setTSoYSDisplay('none')
    }
    function ClickTSoYS(){
        StopAudioOnClick()

        setYnFClass('none')
        setSoTClass('none')
        setWAYDClass('none')
        setWIFiLClass('none')
        setABClass('none')
        setIIRClass('none')
        setEClass('none')
        setTSoYSClass('show')

        setYnFDisplay('none')
        setSoTDisplay('none')
        setWAYDDisplay('none')
        setWIFiLDisplay('none')
        setABDisplay('none')
        setIIRDisplay('none')
        setEDisplay('none')
        setTSoYSDisplay('inline')
    }

    //this function runs every time a song name is clicked on. it will create an array of every audio element and stop it if it is playing. 
    function StopAudioOnClick(){
        let audioElements = document.querySelectorAll('audio');
        for (let i = 0; i < audioElements.length; i++){
            audioElements[i].pause();
            audioElements[i].currentTime = 0;
        }
    }

    return(

    <div className='sccontainer'>
        <h1>Listen</h1>

        <div className="showcase-img">
            
            <div className="showcase-img-inside">

                <div className='listcontainer'>
                    <ul>
                        <li className={YnFClass}
                            onClick={() => ClickYnF()}>
                            A Dream Is A Wish Your Heart Makes
                        </li>
                        <li className={SoTClass}
                            onClick={() => ClickSoT()}>
                            Beautiful Love
                        </li>
                        <li className={ABClass}
                            onClick={() => ClickAB()}>
                            Emily
                        </li>
                        <li className={TSoYSClass}
                            onClick={() => ClickTSoYS()}>
                            How Deep Is The Ocean?
                        </li> 
                        <li className={EClass}
                            onClick={() => ClickE()}>
                            I'm A Fool To Want You
                        </li>
                        <li className={IIRClass}
                            onClick={() => ClickIIR()}>
                            My Foolish Heart
                        </li> 
                        <li className={WAYDClass}
                            onClick={() => ClickWAYD()}>
                            What Are You Doing The Rest of Your Life?
                        </li>
                        <li className={WIFiLClass}
                            onClick={() => ClickWIFiL()}>
                            When I Fall In Love
                        </li>
                    </ul>
                </div>
        </div>
                    <div className='audiocontainer'>

                        <div className='audio1'
                            style={{ 'display': `${YnFDisplay}` }}>
                            <h2>A Dream Is A Wish Your Heart Makes</h2>
                            <audio controls> 
                                <source src='src\components\4adreamisawish.mp3' type='audio/mpeg'>
                                </source>
                            </audio>
                        </div>

                        <div className='audio2'
                            style={{ 'display': `${SoTDisplay}` }}> 
                            <h2>Beautiful Love</h2>
                            <audio controls>
                                <source src='src\components\3beautifullove.mp3' type='audio/mpeg'>
                                </source>
                            </audio>
                        </div>

                        <div className='audio3'
                            style={{ 'display': `${WAYDDisplay}` }}>
                            <h2>What Are You Doing The Rest of Your Life?</h2>
                            <audio controls>
                                <source src='src\components\5whatrudoingtherest.mp3' type='audio/mpeg'>
                                </source>
                            </audio>
                        </div>

                        <div className='audio4'
                            style={{ 'display': `${WIFiLDisplay}` }}>
                            <h2>When I Fall In Love</h2>
                            <audio controls>
                                <source src='src\components\1whenifall.mp3' type='audio/mpeg'>
                                </source>
                            </audio>
                        </div>

                        <div className='audio5'
                            style={{ 'display': `${ABDisplay}` }}>
                            <h2>Emily</h2>
                            <audio controls>
                                <source src='src\components\2emily.mp3' type='audio/mpeg'>
                                </source>
                            </audio>
                        </div>

                        <div className='audio6'
                            style={{ 'display': `${IIRDisplay}` }}>
                            <h2>My Foolish Heart</h2>
                            <audio controls>
                                <source src='src\components\8myfoolish.mp3' type='audio/mpeg'>
                                </source>
                            </audio>
                        </div>

                        <div className='audio7'
                            style={{ 'display': `${EDisplay}` }}>
                            <h2>I'm A Fool To Want You</h2>
                            <audio controls>
                                <source src='src\components\6imafool.mp3' type='audio/mpeg'>
                                </source>
                            </audio>
                        </div>

                        <div className='audio8'
                            style={{ 'display': `${TSoYSDisplay}` }}>
                            <h2>How Deep Is The Ocean</h2>
                            <audio controls>
                                <source src='src\components\7howdeep.mp3' type='audio/mpeg'>
                                </source>
                            </audio>
                        </div>

                    </div>
        </div>

    </div>

    );
};

export default CompletedSongs;