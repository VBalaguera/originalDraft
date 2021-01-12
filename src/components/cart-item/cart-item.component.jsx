import React from 'react';

import { CartItemContainer, CartItemContainerDetails, CartItemContainerDetailsName, CartItemContainerDetailsPrice } from './cart-item.styles'; 

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <CartItemContainerDetails>
      <CartItemContainerDetailsName>{name}</CartItemContainerDetailsName>
      <CartItemContainerDetailsPrice>
        {quantity} x ${price}
      </CartItemContainerDetailsPrice>
    </CartItemContainerDetails>
  </CartItemContainer>
);

export default CartItem;
