import * as React from 'react';
import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ReactPlayer from 'react-player';

import Header from './components/header';

import Home from './components/home';
import Gear from './components/gear';
import Interesting from './components/interesting';
import About from './components/about';
import Contact from './components/contact';

import Footer from './components/footer';


const App: React.FC = () => {

    const FetchFunction = () => {
        let dataArray = [];
        let i = 0;

        fetch("../blog-data.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                dataArray = data;

                let myParentDiv = document.createElement('div');
                myParentDiv.id='home'
                for (i = 0; i < dataArray.length; i++){
                    let myNewPost = document.createElement('div');


                    let myNewElement1 = document.createElement('h2');
                    myNewElement1.innerText = dataArray[i].title;
                    myNewPost.appendChild(myNewElement1);


                    let myNewElement2 = document.createElement("ReactPlayer");
                    myNewElement2.setAttribute('url', `${dataArray[i].url}`);
                    myNewPost.appendChild(myNewElement2);

                    myParentDiv.appendChild(myNewPost);
                    document.querySelector('#root').appendChild(myParentDiv);
                }
            })
    };
    FetchFunction()



    return(
    <HashRouter>

        <Header />

        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/gear' component={Gear}/>
            <Route path='/interesting' component={Interesting}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
        </Switch>

        <Footer />

    </HashRouter>
    ); 
}

export default App;