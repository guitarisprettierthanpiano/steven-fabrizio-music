import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Gear from './components/gear';
import SongsToDo from './components/songstodo';
import Contact from './components/contact';
import Footer from './components/footer';
import BetterHome from './components/betterhome'

const App: React.FC = () => {

    return(
    <HashRouter>
        <Header />
        <Switch>
            <Route exact path='/' 
            component={BetterHome}/>
            <Route path='/gear' 
            component={Gear}/>
            <Route path='/songs' 
            component={SongsToDo}/>
            <Route path='/contact' 
            component={Contact}/>
        </Switch>
        <div className='foooootergoeshere'/>
    </HashRouter>
    ); 
};

export default App;