import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='Header'>
        <h2>Masuma</h2>
        <ul>
            <li>
                <a href="/Home">Home</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
            <li>
                <a href="/Service">Service</a>
            </li>
            <li>
                <a href="/Blog">Blog</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
        </ul>
    </div>
    );
};

export default Header;