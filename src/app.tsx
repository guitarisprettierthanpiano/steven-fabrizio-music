import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Gear from './components/gear';
import SongsToDo from './components/songstodo';
import BetterHome from './components/betterhome'
import Showcase from './components/showcase'
import Stribe from './components/stribe'

const App: React.FC = () => {

    return(
    <HashRouter>
        <Header />
        <Switch>
            <Route exact path='/' 
            component={BetterHome}/>
            <Route exact path='/showcase' 
            component={Showcase}/>
            <Route path='/gear' 
            component={Gear}/>
            <Route path='/songs' 
            component={SongsToDo}/>
            <Route path='/stribe' 
            component={Stribe}/>
        </Switch>
    </HashRouter>
    ); 
};

export default App;