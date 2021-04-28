import * as React from 'react';

const Home: React.FC = () => {

    //i will be generating my blog content from a json file i made.
    const GenerateBlogs = () => {

        fetch('../blog-data.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                const dataArray:any[] = data;

                const myRoot = document.querySelector('#root');
                const myParentDiv = document.querySelector('#home');
                
                let i:number = 0;
                for (i = 0; i < dataArray.length; i++){
                    let myNewPost = document.createElement('div');
                    let myNewElement1 = document.createElement('h2');
                    let myNewElement2= document.createElement('iframe');
                    let myNewElement3=document.createElement('p');
                    let myNewElement4=document.createElement('span');

                    myNewPost.classList.add('blog-entry');
                    myNewElement1.innerText = dataArray[i].title;
                    myNewElement2.setAttribute('src', `${dataArray[i].url}`);
                    myNewElement3.innerText= dataArray[i].text;
                    myNewElement4.innerText= 'Posted on ' 
                                            + dataArray[i].date;

                    myNewPost.appendChild(myNewElement1);
                    myNewPost.appendChild(myNewElement2);
                    myNewPost.appendChild(myNewElement3);
                    myNewPost.appendChild(myNewElement4);
                    myParentDiv.appendChild(myNewPost);
                };
                myRoot.appendChild(myParentDiv);
            });
    };
    GenerateBlogs();
    
    return(
    <div id='home'>
    </div>
    );
};

export default Home;
