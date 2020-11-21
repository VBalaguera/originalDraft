//cart-dropdown equals reading-list

import React from 'react';
import { connect } from 'react-redux'; 

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'; 
import { selectCartItems } from '../../redux/cart/cart.selectors.js'; 

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
        ))}
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
); 

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
}); 

export default connect (mapStateToProps)(CartDropdown); 

//we are going to display items inside that div, but we need to access them; we will pull them off by using connect; 