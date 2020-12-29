import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import readingReducer from './reading/reading.reducer'; 
import directoryReducer from './directory/directory.reducer';
import flagshipReducer from './flagship/flagship.reducer';
import shopReducer from './shop/shop.reducer';
import postsReducer from './posts/posts.reducer'; 

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  reading: readingReducer,
  directory: directoryReducer,
  flagship: flagshipReducer,
  shop: shopReducer,
  posts: postsReducer
});

export default persistReducer(persistConfig, rootReducer);
