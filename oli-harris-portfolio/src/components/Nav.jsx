import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='navbar'>
            <ul className="pages">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
