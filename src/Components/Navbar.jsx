import React from 'react';
import navLogo from '../assets/nav.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='right-div navbar-title'>
                <img className='img' src={navLogo} alt="" />
                <h3>Food Cut</h3>
            </div>
            <div className='left-div navbar-list'>
                <p>Home</p>
                <p>Menu</p>
                <p>About us</p>
            </div>
        </nav>
    );
};

export default Navbar;