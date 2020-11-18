import React from 'react'; 
import { Link } from 'react-router-dom'; 

// firebase 16. 
import { auth } from '../../firebase/firebase.utils.js';

import {  ReactComponent as Logo } from '../../assets/4.3 crown.svg'; 

import './header.styles.scss';

// firebase 17. 
const Header = ( {currentUser} ) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
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

            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to='/signin'>SIGN IN</Link>
            }
        </div>

    </div>
);

export default Header; 

/*
 firebase 18. the ternary operator

    {
    currentUser ?
    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
    :
    <Link className="option" to='/signin'>SIGN IN</Link>
}

*/ 