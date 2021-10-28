import React from 'react';
import logo from '../logo-white-words.svg';


const Header = () => (
    <div id="header">
        <div id="headerContainer">
            <a href="/"><img src={logo} alt="tiny bites logo"></img></a>
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/nutrition">Nutrition</a></li>
            <li><a href="/safety">Safety</a></li>
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
)

export default Header