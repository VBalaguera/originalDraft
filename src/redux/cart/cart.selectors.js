
import { createSelector } from 'reselect';


const selectCart = state => state.cart; 

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
); 
//using this on cart-dropdown component; this will make sure the component is not getting rerendered when unrelated pieces of state change

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0)
); 
// using this on cart-icon component; same reasons as before 