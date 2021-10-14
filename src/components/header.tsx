import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {

    function ClickBuy(){
        document.querySelector('nav').style.display = "none";
    }

    return(
    <nav id='top'>

        <h2>Steven Fabrizio</h2>

        <ul>
            <NavLink exact activeClassName='active' 
            to='/'>
                home
            </NavLink>

            <NavLink activeClassName='active' 
            to='/showcase'>
                listen
            </NavLink>

            <NavLink activeClassName='active' 
            to='/stribe'
            onClick={ () => ClickBuy()}>
                buy
            </NavLink>  

            <NavLink activeClassName='active' 
            to='/gear'>
                gear
            </NavLink>

            <NavLink activeClassName='active' 
            to='/songs'>
                future songs
            </NavLink>
        </ul>

    </nav>
    );
};

export default Header;
