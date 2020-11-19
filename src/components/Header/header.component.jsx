import React from 'react'; 
import { Link } from 'react-router-dom'; 

// REDUX 10. on header.component.jsx: 
import { connect } from 'react-redux'; 
//a high order comp to have access to everything redux related 


// firebase 16. 
import { auth } from '../../firebase/firebase.utils.js';

import {  ReactComponent as Logo } from '../../assets/4.3 crown.svg'; 

import './header.styles.scss';

// firebase 17. 
const Header = ({currentUser}) => (
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

// REDUX 10. cont on header: 

const mapStateToProps = state => ({
    // state is root-reducer 
    // prop's name will be the actual prop we want to pass in 
    currentUser: state.user.currentUser 
    // we want the root-reducer, the user value (with userReducer), and from there currentUser value 

})

/*
before: export default Header; 
after: */
export default connect(mapStateToProps)(Header);
// connect() uses two functions:
// a FUNCTION to access the ROOT REDUCER: mapStateToProps(); 
// the second is optional, and give back a higher comp to pass to the header



/*
 firebase 18. the ternary operator

    {
    currentUser ?
    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
    :
    <Link className="option" to='/signin'>SIGN IN</Link>
}

*/ 