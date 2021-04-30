import * as React from 'react';

const Home: React.FC = () => {

    //i will be generating my blog content from a json file storing the raw text and links.
    const GenerateBlogs = () => {
        fetch('../blog-data.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                const dataArray:any[] = data;

                const myParentDiv:HTMLElement = document.querySelector('.blog-container');
                 
                let i:number = 0; 
                for (i = 0; i < dataArray.length; i++){
                    let myNewPost:HTMLElement = 
                    document.createElement('div');
                    let myNewElement1:HTMLElement = 
                    document.createElement('h2');
                    let myNewElement2:HTMLElement =  
                    document.createElement('iframe');
                    let myNewElement3:HTMLElement =
                    document.createElement('p');  
                    let myNewElement4:HTMLElement =
                    document.createElement('span');
                    let myNewElement5:HTMLElement =
                    document.createElement('span')

                    myNewPost.classList.add('blog-entry');
                    myNewElement1.innerText = dataArray[i].title;
                    myNewElement1.setAttribute('data-aos','flip-up');

                    myNewElement2.setAttribute('src', `${dataArray[i].url}`);
                    myNewElement2.setAttribute('data-aos', 'fade-up');
                    myNewElement2.setAttribute('loading', 'lazy');
                    myNewElement3.innerText = dataArray[i].text;
                    myNewElement4.classList.add('influences');
                    myNewElement5.innerText = 'Posted on ' 
                    + dataArray[i].date;

                    /*getting data from an object in json file below */
                    let myKeysArray:any[] = 
                    Object.keys(dataArray[i].influences)
                    let myValuesArray:any[] = 
                    Object.values(dataArray[i].influences)

                    let myInfluencesSpan=document.createElement('span')
                    myInfluencesSpan.innerText='Influences:';
                    myNewElement4.appendChild(myInfluencesSpan);

                    let myListElement:HTMLElement = 
                    document.createElement('ul');
                    let j:number = 0;
                    for (j = 0; j < myKeysArray.length; j++){
                        let myNewAnchor:HTMLElement = 
                        document.createElement('a');
                        let myNewLi:HTMLElement = 
                        document.createElement('li');

                        myNewAnchor.setAttribute(
                            'href', myValuesArray[j])
                        myNewAnchor.setAttribute(
                            'target', '_blank');
                        myNewAnchor.innerText = myKeysArray[j];

                        myNewLi.appendChild(myNewAnchor);
                        myListElement.appendChild(myNewLi)
                    }
                    myNewElement4.appendChild(myListElement)
                    /*done getting data from object in json file*/

                    myNewPost.appendChild(myNewElement1);
                    myNewPost.appendChild(myNewElement2);
                    myNewPost.appendChild(myNewElement3);
                    myNewPost.appendChild(myNewElement4);
                    myNewPost.appendChild(myNewElement5);
                    myParentDiv.appendChild(myNewPost);
                };
            });
    };

    //only fetch and generate if blog container doesn't exist yet
    if (document.querySelector('.blog-container') === null){
        GenerateBlogs();
    };

    return(
    <div id='home'>
        <div className='main-section'>
            <h1>
                One Man. One Guitar. One Song.
            </h1>
        </div>
        <div className='blog-container'>
        </div>
    </div>
    );
};

export default Home;
