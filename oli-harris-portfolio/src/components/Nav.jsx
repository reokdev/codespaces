import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <ul className="pages">
                    <li>
                        <NavLink to="/home" end className={({ isActive }) => isActive ? 'active-link' : undefined}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={({ isActive }) => isActive ? 'active-link' : undefined}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : undefined}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
