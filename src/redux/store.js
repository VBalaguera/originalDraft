// PERSIST cont. 
import { createStore, applyMiddleware } from 'redux'; 
import { persistStore } from 'redux-persist'; 
// allows browser to cache store, depending on which set configs we have 

import logger from 'redux-logger';

import rootReducer from './root-reducer'; 

const middlewares = [logger]; 

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
//persistor is a persisted version of the store; with the store, we will create a new Provider to wrap the app.  

export default { store, persistor }; 
//now we have access to both