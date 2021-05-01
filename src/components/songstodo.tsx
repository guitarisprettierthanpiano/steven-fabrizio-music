import * as React from 'react';

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
            document.querySelector('#songs').appendChild(mySongUl1);

            //opera list
            standardsArray = data[1].opera.sort();
            let mySongUl2:HTMLElement = document.createElement('ul')
            mySongUl2.classList.add('opera')
            let myH22:HTMLElement = document.createElement('h2');
            myH22.innerText = 'Opera';
            mySongUl2.appendChild(myH22);
            GenerateListsOfSongs(mySongUl2);
            document.querySelector('#songs').appendChild(mySongUl2);

            //contemporary list
            standardsArray = data[2].contemporary.sort();
            let mySongDiv3:HTMLElement = document.createElement('ul')
            mySongDiv3.classList.add('contemporary')
            let myH23:HTMLElement = document.createElement('h2')
            myH23.innerText='Contemporary'
            mySongDiv3.appendChild(myH23);
            GenerateListsOfSongs(mySongDiv3);
            document.querySelector('#songs').appendChild(mySongDiv3);
        });
    };

    //generate list of songs if new page load
    if (document.querySelector('.song-name') === null){
        FetchListsOfSongs();
    };

    return(
    <div id='songs'>
        <h1>Songs I Want To Do</h1>
        <div className='maria'>
            <h2>Maria Callas</h2>
            <h3>Soprano Singer</h3>
            <p>Music should be soft</p>
            <p>Music should be osft Music should be osft Music should be osft Music should be osft Music should be osft Music should be osft Music should be osft Music should be osft .</p>
        </div>
        <div className='bill'>
            <h2>Bill Evans</h2>
            <h3>Pianist</h3>
            <p>i trust laymeni trust laymeni trust laymeni trust laymen </p>
            <p>i trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymen.</p>
        </div>
        <div className='tony'>
            <h2>Tony Bennett</h2>
            <h3>Tenor Singer</h3>
            <p>i trust laymeni trust laymeni trust laymeni trust laymen </p>
            <p>i trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymeni trust laymen.</p>
        </div>
    </div>
    )
}

export default SongsToDo;
