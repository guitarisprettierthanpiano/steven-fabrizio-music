import * as React from 'react';
import { useState } from 'react';

const SongsToDo: React.FC = () => {

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

    //generate list of songs if new page load
    if (document.querySelector('.song-name') === null){
        FetchListsOfSongs();
    };


    const [inHover, setHover] = useState(false);
    const [outHover, setHoover] = useState(true);

    const StateFunctionA = () => {
        setHover(true);
        setHoover(false);
    }
    const StateFunctionB = () => {
        setHover(false);
        setHoover(true);
    }
    return(
    <div id='songs-container'>
        <h1>Songs I Want To Do</h1>
        <p className='songs-p'>These are some songs that I'm interested in learning. Some I will put on YouTube. Some of them I may only fool around with. I don't discriminate against any genres. There is only good and bad music. If you have any ideas or suggestions post them below.</p>
        <div className='songs'>
            <div className='bill'
                onMouseEnter={() => StateFunctionA()}
                onMouseLeave={() => StateFunctionB()}>
                <h2>Bill Evans</h2>
                <h3>Pianist</h3>
                <p className='billshow'>i trust laymeni trust laymeni trust laymeni trust laymen </p>

                    {outHover && <p>start showing before mouseover</p>}
                    {inHover && 
                    <p className='billhide'>I believe in things that are developed through hard work. I always like people who have developed long and hard, especially through introspection and a lot of dedication. I think what they arrive at is usually a much deeper and more beautiful thing than the person who seems to have that ability and fluidity from the beginning. I say this because it's a good message to give to young talents who feel as I used to.</p>}

            </div>
            <div className='maria'>
                <h2>Maria Callas</h2>
                <h3>Soprano</h3>
                <p>When music fails to agree to the ear, to soothe the ear and the heart and the senses, then it has missed the point.</p>
                <p>When music fails to agree to the ear, to soothe the ear and the heart and the senses, then it has missed it's point. That is why I don't agree with modern music... Music should be essentially simple, and upon simplicity and beauty of line, it could become great.</p>
            </div>
            <div className='tony'>
                <h2>Tony Bennett</h2>
                <h3>Tenor</h3>
                <p>i trust laymeni trust laymeni trust laymeni trust laymen </p>
                <p>i trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymen.</p>
            </div>
        </div>
    </div>
    )
}

export default SongsToDo;
