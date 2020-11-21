//cart-dropdown equals reading-list

import React from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect'; 
import { withRouter } from 'react-router-dom'; 

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'; 
import { selectCartItems } from '../../redux/cart/cart.selectors.js'; 

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ? (
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
            ) : (
            <span className='empty-message'>Your cart is empty</span>
        )}
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>CHECKOUT</CustomButton>
    </div>
); 

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown)); 

//we are going to display items inside that div, but we need to access them; we will pull them off by using connect; 