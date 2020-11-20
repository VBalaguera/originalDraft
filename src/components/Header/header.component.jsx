import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'; 


import CartIcon from '../../components/cart-icon/cart-icon.component'; 
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// NOTE: FOR UTILITY PURPOSES DURING THE COURSE I AM USING DROPDOWN INSTEAD, BUT EVERY MODIFICATION WILL BE DONE ONTO READING-LIST, MINUS THE ONES RELATING CHECKOUT PAYING FUNCTIONS AND SUCH
// import ReadingList from '../../components/reading-list/reading-list.component';
import ReadingIcon from '../../components/reading-icon/reading-icon.component'; 


import { auth } from '../../firebase/firebase.utils.js';
import {  ReactComponent as Logo } from '../../assets/4.3 crown.svg'; 

import './header.styles.scss';


const Header = ({currentUser, hidden}) => (
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
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                <Link className="option" to='/signin'>SIGN IN</Link>
            )}
            <CartIcon></CartIcon>
            <ReadingIcon></ReadingIcon>
        </div>
        {
            hidden ? null :
            <CartDropdown></CartDropdown>
        }
    </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
}); 


export default connect(mapStateToProps)(Header);


