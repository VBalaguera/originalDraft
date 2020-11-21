 import { combineReducers } from 'redux'; 

import userReducer from './user/user.reducer'; 
import cartReducer from './cart/cart.reducer'; 
import readingReducer from './reading/reading.reducer'; 


export default combineReducers({ 

    user: userReducer,
    cart: cartReducer,
    reading: readingReducer

}); 

