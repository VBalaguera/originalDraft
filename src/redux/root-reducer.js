 import { combineReducers } from 'redux'; 
 import { persistReducer } from 'redux-persist'; 
 import storage from 'redux-persist/lib/storage';
 //this is the type of storage we want, localStorage on window browser as the default storage; we could import sessioStorage too, from its respective library (we can find it in the documentation); 

import userReducer from './user/user.reducer'; 
import cartReducer from './cart/cart.reducer'; 
import directoryReducer from './directory/directory.reducer'; 
import shopReducer from './shop/shop.reducer';  

//new persist config: 
const persistConfig = {
    key: 'root', //at what point of the reducer we want to store everything
    storage, 
    whitelist: ['cart']
    //an arr that contains the string names of any of the reducers that we want to store; user is being handled by firebase auth, so there is no reason to persist it, so only cart and reading for now;  

}
//a JSON object that represents configs we want for persist to use

//since we have to wrap everything into the new persist reducer: 
const rootReducer = combineReducers({
    user: userReducer, 
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer);
//this returns a modified version of rootReducer with the persistConfig on top of it; 
