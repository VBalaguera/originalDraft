import React from 'react'

import './overlay-menu.styles.css';
//this is a work in progress
//I repeat: THIS IS A WORK IN PROGRESS



const OverlayMenu = () => (
    <div class="overlay-menu" id="overlay-menu">
    <div class="overlay-menu-wrap">
        <ul class="overlay-menu-wrap-nav">
            <li><a class="overlay-menu-wrap-nav-main" href="#">Thoughts</a>
            <ul>
                <li><a href="#">About Company</a></li>
                <li><a href="#">Designers</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Pets</a></li>
            </ul>
            </li>
            <li><a class="overlay-menu-wrap-nav-main" href="#">theCity Itself</a>
            <ul>
                <li><a href="https://www.google.hr/">Web Design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Apps</a></li>
                <li><a href="#">Graphic design</a></li>
                <li><a href="#">Branding</a></li>
            </ul>
            </li>
            <li><a class="overlay-menu-wrap-nav-main" href="/pages/about.html">About</a>
            <ul>
                <li><a href="#">Web</a></li>
                <li><a href="#">Graphic</a></li>
                <li><a href="#">Apps</a></li>
            </ul>
            </li>
        </ul>
        <div class="overlay-media">
            <a href="#" target="#">
                <img class="overlay-media-fb" src="./img/facebook-square-brands.svg" alt="fb" />
            </a>
            <a href="#" target="#">
                <img class="overlay-media-youtube" src="./img/youtube-brands.svg" alt="youtube" />
            </a>
            <a href="#" target="#">
                <img class="overlay-media-instagram" src="./img/instagram-square-brands.svg" alt="instagram" />
            </a>
            <a href="#" target="#">
                <img class="overlay-media-twitter" src="./img/twitter-square-brands.svg" alt="twitter" />
            </a>
            <a href="#" target="#">
                <img class="overlay-media-mail" src="./img/envelope-solid.svg" alt="mail" />
            </a>
            </div>
        </div>
    </div>
); 

export default OverlayMenu; 