import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {

    return(
    <nav id='top'>
    <h2>Steven Fabrizio</h2>
    <ul>
        <NavLink exact activeClassName='active' to='/'>
            <li>Home</li> 
        </NavLink>

        <NavLink activeClassName='active' to='/gear'>
            <li>Gear</li> 
        </NavLink>

        <NavLink activeClassName='active' to='/songs'>
            <li>Songs To Do</li> 
        </NavLink>

        <NavLink activeClassName='active' to='/about'>
            <li>About Me</li> 
        </NavLink> 

        <NavLink activeClassName='active' to='/contact'>
            <li>Contact</li> 
        </NavLink>                   
    </ul>
    </nav>
    );
};

export default Header;
