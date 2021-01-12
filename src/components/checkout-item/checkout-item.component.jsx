import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, CheckoutItemContainerImg, CheckoutItemName, CheckoutItemQuantity, CheckoutItemArrow, CheckoutItemValue, CheckoutItemPrice, CheckoutItemRemoveButton } from './checkout-item.styles'; 

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemContainerImg>
        <img src={imageUrl} alt='item' />
      </CheckoutItemContainerImg>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <CheckoutItemArrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </CheckoutItemArrow>
        <CheckoutItemValue>{quantity}</CheckoutItemValue>
        <CheckoutItemArrow  onClick={() => addItem(cartItem)}>
          &#10095;
        </CheckoutItemArrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <CheckoutItemRemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
