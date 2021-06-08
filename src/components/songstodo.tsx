import * as React from 'react';
import { useState } from 'react';

//https://www.youtube.com/embed/IZDy3MQni78?start=2243
const SongsToDo: React.FC = () => {

    //i made a json file because i want to easily add and remove songs over time.
    const FetchListsOfSongs = () => {
        fetch('../song-list-data.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            const GenerateListsOfSongs = (mySongDiv:HTMLElement) => {
                for (let i:number = 0; i < standardsArray.length; i++) {
                    const myLi:HTMLElement = document.createElement('li');

                    myLi.innerText = standardsArray[i];
                    myLi.classList.add('song-name');

                    mySongDiv.appendChild(myLi);
                }
            };

            //standards list
            let standardsArray:string[] = data[0].standards.sort();
            let mySongUl1:HTMLElement = document.createElement('ul')
            mySongUl1.classList.add('standards')
            let myH21:HTMLElement = document.createElement('h2')
            myH21.innerText='Standards'
            mySongUl1.appendChild(myH21);
            GenerateListsOfSongs(mySongUl1);
            document.querySelector('.songs').appendChild(mySongUl1);

            //opera list
            standardsArray = data[1].opera.sort();
            let mySongUl2:HTMLElement = document.createElement('ul')
            mySongUl2.classList.add('opera')
            let myH22:HTMLElement = document.createElement('h2');
            myH22.innerText = 'Opera';
            mySongUl2.appendChild(myH22);
            GenerateListsOfSongs(mySongUl2);
            document.querySelector('.songs').appendChild(mySongUl2);

            //contemporary list
            standardsArray = data[2].contemporary.sort();
            let mySongDiv3:HTMLElement = document.createElement('ul')
            mySongDiv3.classList.add('contemporary')
            let myH23:HTMLElement = document.createElement('h2')
            myH23.innerText='Contemporary'
            mySongDiv3.appendChild(myH23);
            GenerateListsOfSongs(mySongDiv3);
            document.querySelector('.songs').appendChild(mySongDiv3);
        });
    }; 

    //run function above only if new page load
    if (document.querySelector('.song-name') === null){
        FetchListsOfSongs();
    };


    //these usestates change the text shown when their div is moused over
    const [inHoverB, setHoverInB] = useState(false);
    const [outHoverB, setHoverOutB] = useState(true);
    const [inHoverM, setHoverInM] = useState(false);
    const [outHoverM, setHoverOutM] = useState(true);
    const [inHoverT, setHoverInT] = useState(false);
    const [outHoverT, setHoverOutT] = useState(true);
    const StateFunctionA = () => {
        setHoverInB(true);
        setHoverOutB(false);
    };
    const StateFunctionB = () => {
        setHoverInB(false);
        setHoverOutB(true);
    };
    const StateFunctionC = () => {
        setHoverInM(true);
        setHoverOutM(false);
    };
    const StateFunctionD = () => {
        setHoverInM(false);
        setHoverOutM(true);
    };
    const StateFunctionE = () => {
        setHoverInT(true);
        setHoverOutT(false);
    };
    const StateFunctionF = () => {
        setHoverInT(false);
        setHoverOutT(true);
    };

    return(
    <div id='songs-container'>
        <h1>Songs To Do</h1>
        <p className='songs-p'>These are some songs that I'm interested in learning. Some I will put on YouTube. Some of them I may only fool around with. I don't discriminate against any genres or eras. There is only good and bad music. There have always been and always will be inspired musicians making great art.</p>
        <div className='songs'>
            <div className='bill'
            onMouseEnter={() => StateFunctionA()}
            onMouseLeave={() => StateFunctionB()}>
                <h2>Bill Evans</h2>
                <h3>Pianist</h3>

                {outHoverB && 
                <p className='billshow'>“I always like people who have developed long and hard... I think what they arrive at is usually a much deeper and more beautiful thing than the person who seems to have that ability and fluidity from the beginning.”
                </p>}
                {inHoverB && 
                <p className='billhide'>
                    “I believe in things that are developed through hard work. I always like people who have developed long and hard, especially through introspection and a lot of dedication. I think what they arrive at is usually a much deeper and more beautiful thing than the person who seems to have that ability and fluidity from the beginning. I say this because it's a good message to give to young talents who feel as I used to.”
                </p>}
            </div>
            <div className='maria'
            onMouseEnter={() => StateFunctionC()}
            onMouseLeave={() => StateFunctionD()}>
                <h2>Maria Callas</h2>
                <h3>Soprano</h3>
                {outHoverM && 
                <p className='mariashow'>
                    “When music fails to agree to the ear, to soothe the ear and the heart and the senses, then it has missed the point.”
                </p>}
                {inHoverM && 
                <p className='mariahide'>
                    “When music fails to agree to the ear, to soothe the ear and the heart and the senses, then it has missed it's point. That is why I don't agree with modern music... Music should be essentially simple, and upon simplicity and beauty of line, it could become great.”
                </p>}
            </div>
            <div className='tony'
            onMouseEnter={() => StateFunctionE()}
            onMouseLeave={() => StateFunctionF()}>
                <h2>Tony Bennett</h2>
                <h3>Tenor</h3>
                {outHoverT && 
                <p className='tonyshow'>
                    “When you listen to the audience, they will tell you what they like.”
                </p>}
                {inHoverT && 
                <p className='tonyhide'>
                    “I'm still learning about music. The best way to learn is to listen to the audience. When you listen to the audience, they will tell you what they like. I wish these big corporations, instead of telling the audience what they should have, would listen.”
                </p>}
            </div>
        </div>
    </div>
    );
};

export default SongsToDo;
