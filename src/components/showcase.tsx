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

    return(
    <>
    <div className='sccontainer'>
        <h1>Showcase</h1>

        <div className="showcase-img">
            <div className="showcase-img-inside">
                Below are a few of the recent songs I have recorded.
            </div>
        </div>

        <div className='listcontainer'>
            <ul>
                <li className={YnFClass}
                onClick = {() => ClickYnF()}>
                    Young and Foolish
                </li>
                <li className={SoTClass}
                onClick = {() => ClickSoT()}>
                    Some Other Time
                </li>
                <li className={WAYDClass}
                onClick = {() => ClickWAYD()}>
                    What Are You Doing The Rest of Your Life?
                </li>
                <li className={WIFiLClass}
                onClick = {() => ClickWIFiL()}>
                    When I Fall In Love
                </li>
                <li className={ABClass}
                onClick = {() => ClickAB()}>
                    Almost Blue
                </li>
                <li className={IIRClass}
                onClick = {() => ClickIIR()}>
                    Isn't It Romantic?
                </li>
                <li className={EClass}
                onClick = {() => ClickE()}>
                    Emily
                </li>
                <li className={TSoYSClass}
                onClick = {() => ClickTSoYS()}>
                    The Shadow of Your Smile
                </li>
            </ul>
        </div>
        
        <div className='audiocontainer'>

            <div className='audio1'
            style={{'display':`${YnFDisplay}`}}>
                <h2>Young and Foolish</h2>
                <audio controls>
                    <source src='src\components\1.mp3' type='audio/mpeg'>
                    </source>
                </audio>
                1
            </div>

            <div className='audio2'
            style={{'display':`${SoTDisplay}`}}>
                <h2>Some Other Time</h2>
                <audio controls>
                    <source src='src\components\2.mp3' type='audio/mpeg'>
                    </source>
                </audio>
                2
            </div>

            <div className='audio3'
            style={{'display':`${WAYDDisplay}`}}>
                <h2>What Are You Doing The Rest of Your Life?</h2>
                <audio controls>
                    <source src='src\components\3.mp3' type='audio/mpeg'>
                    </source>
                </audio>
                3
            </div>

            <div className='audio4'
            style={{'display':`${WIFiLDisplay}`}}>
                <h2>When I Fall In Love</h2>
                <audio controls>
                    <source src='src\components\4.mp3' type='audio/mpeg'>
                    </source>
                </audio>
                4
            </div>

            <div className='audio5'
            style={{'display':`${ABDisplay}`}}>
                <h2>Almost Blue</h2>
                <audio controls>
                    <source src='src\components\5.mp3' type='audio/mpeg'>
                    </source>
                </audio>
                5
            </div>

            <div className='audio6'
            style={{'display':`${IIRDisplay}`}}>
                <h2>Isn't It Romantic?</h2>
                <audio controls>
                    <source src='src\components\6.mp3' type='audio/mpeg'>
                    </source>
                </audio>
                6
            </div>

            <div className='audio7'
            style={{'display':`${EDisplay}`}}>
                <h2>Emily</h2>
                <audio controls>
                    <source src='src\components\7.mp3' type='audio/mpeg'>
                    </source>
                </audio>
                7
            </div>

            <div className='audio8'
            style={{'display':`${TSoYSDisplay}`}}>
                <h2>The Shadow of Your Smile</h2>
                <audio controls>
                    <source src='src\components\8.mp3' type='audio/mpeg'>
                    </source>
                </audio>
                8
            </div>

        </div>
    </div>

    </>
    );
};

export default CompletedSongs;