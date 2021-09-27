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

        <NavLink activeClassName='active' to='/showcase'>
            <li>Listen</li> 
        </NavLink>

        <NavLink activeClassName='active' to='/gear'>
            <li>Gear</li> 
        </NavLink>

        <NavLink activeClassName='active' to='/songs'>
            <li>Future Songs</li> 
        </NavLink>

        <NavLink activeClassName='active' to='/contact'>
            <li>Contact</li> 
        </NavLink>  
    </ul>
    </nav>
    );
};

export default Header;
