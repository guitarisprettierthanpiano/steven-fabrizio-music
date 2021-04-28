import * as React from 'react';
import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';

import Home from './components/home';
import Gear from './components/gear';
import Interesting from './components/interesting';
import About from './components/about';
import Contact from './components/contact';

import Footer from './components/footer';


const App: React.FC = () => {
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