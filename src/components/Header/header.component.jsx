import React from 'react'; 
import { Link } from 'react-router-dom'; 

import {  ReactComponent as Logo } from '../../assets/4.3 crown.svg'; 

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/posts' className='option'>
                POSTS
            </Link>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/about' className='option'>
                ABOUT
            </Link>
            <Link to='/signin' className='option'>
                SIGN IN
            </Link>
        </div>

    </div>
);

export default Header; 