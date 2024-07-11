import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="organization-name">ConsultEase</span>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
