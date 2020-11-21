
import { createSelector } from 'reselect';


const selectCart = state => state.cart; 

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
); 
//using this on cart-dropdown component; this will make sure the component is not getting rerendered when unrelated pieces of state change

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
    // remember, cart.hidden comes from INITIAL_STATE of cart.reducer.js
)



export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0)
); 
// using this on cart-icon component; same reasons as before 

// on cart.selectors we create this: 
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity * cartItem.price, 0)    
)
// similar to last one, we're only accumulate the value of the price of each item times the item quantity 