import * as React from 'react';
import { useState } from 'react';

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
                
            for (let i:number = 0; i < dataArray.length; i++){
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
                //myNewElement2.setAttribute('data-aos', 'fade-up');
                myNewElement2.setAttribute('loading', 'lazy');
                myNewElement3.innerText = dataArray[i].text;
                myNewElement4.classList.add('influences');
                //myNewElement5.innerText = 'Posted on ' 
                //+ dataArray[i].date;

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
                for (let j:number = 0; j < myKeysArray.length; j++){
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
                //myNewPost.appendChild(myNewElement5);
                myParentDiv.appendChild(myNewPost);
            };
        });
    };

    //only fetch and generate if blog container doesn't exist yet
    if (document.querySelector('.blog-container') === null){
        GenerateBlogs();
    };

    //i'm using this array to get the image name i'm changing the src to. using a counter to get the get array[counter] element.
    const imageArray: Array<string> = [
        '../images/2atimeforlove.png',
        '../images/0imafooltowantyou.png',
        '../images/1emilyB.png',
        '../images/whitecircle.png',
        '../images/blackcircle.png',
        'One Man',
        'One Guitar',
        'One Vision'
    ];

    let [count, setCount] = 
    useState<number>(() => 0); 
    let [imageURL, setImageURL] = useState<string>(() => '../images/2atimeforlove.png');
    let [firstcircle, setFirstCircle] = 
    useState<string>(() => '../images/whitecircle.png')
    let [secondcircle, setSecondCircle] = 
    useState<string>(() => '../images/blackcircle.png')
    let [thirdcircle, setThirdCircle] = 
    useState<string>(() => '../images/blackcircle.png')
    let [h1Text, setH1Text] =
    useState<string>(() => 'One Man');

    const GenerateImageOne = () => {
        setImageURL(() => imageArray[1])   
        setCount(() => 1)
        setFirstCircle(() => imageArray[4])
        setSecondCircle(() => imageArray[3])
        setThirdCircle(() => imageArray[4])
        setH1Text(() => imageArray[6])
    };
    const GenerateImageTwo = () => {
        setImageURL(() => imageArray[2])   
        setCount(() => 2) 
        setFirstCircle(() => imageArray[4])
        setSecondCircle(() => imageArray[4])
        setThirdCircle(() => imageArray[3])
        setH1Text(() => imageArray[7])
    };
    const GenerateImageZero = () => {
        setImageURL(() => imageArray[0])   
        setCount(() => 0) 
        setFirstCircle(() => imageArray[3])
        setSecondCircle(() => imageArray[4])
        setThirdCircle(() => imageArray[4])
        setH1Text(() => imageArray[5])
    };
    const ChangeImageForward = () => {
        switch (count){
            case 2:
                GenerateImageZero();
                break;
            case 1:
                GenerateImageTwo();
                break;
            default:
                GenerateImageOne();};
    };
    const ChangeImageBackward = () => {
        switch (count){
            case 2:
                GenerateImageOne() ;
                break;
            case 1:
                GenerateImageZero() ;
                break;
            default:
                GenerateImageTwo() ;};
    };
    

    return(
    <div id='home-container'>
        <div 
        className='main-section'>
            <button 
            onClick={() => ChangeImageBackward()}
            id='btnone'>
                &lt;
            </button>
            <div className='img-container'>
                <img 
                id='home-image' 
                src={imageURL}/>
            </div>
            <h1>
                {h1Text}
            </h1>
            <button 
            onClick={() => ChangeImageForward()}
            id='btntwo'>
                &gt;
            </button>
            <div className='carousel-indicator'>
                <img 
                id='first-circle' 
                src={firstcircle}
                onClick={() => GenerateImageZero()}/>
                <img 
                id='second-circle' 
                src={secondcircle}
                onClick={() => GenerateImageOne()}/>
                <img 
                id='third-circle' 
                src={thirdcircle}
                onClick={() => GenerateImageTwo()}/>
            </div>
        </div>
        <h1 className='showcase'>Showcase</h1>
        <div className='blog-container'>
        </div>
    </div>
    );
};

export default Home;
