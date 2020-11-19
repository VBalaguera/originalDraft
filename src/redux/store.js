// REDUX 7. CREATING THE STORE: store.js inside the REDUX folder 
import { createStore, applyMiddleware } from 'redux'; 
// WE NEED TO ADD MIDDLEWARE (WHICH GOES BETWEEN THE ACTIONS AND THE ROOTREDUCER) TO THE STORE SO WE CAN CATCH and DISPLAY (CONSOLE.LOG) ACTIONS WHEN THEY'RE FIRED OR DISPATCHED. 

import logger from 'redux-logger'; //this also helps on debugging; 

import rootReducer from './root-reducer'; 

// setting MIDDLEWARES, REDUX expects arrays: 
const middlewares = [logger]; 

// making the STORE 
const store = createStore(rootReducer, applyMiddleware(...middlewares));
// with ...middlewares we are spreading all the methods or values in that array into applyMiddleware() as individual arguments. If we need to add more things to the MIDDLEWARE, we can do it through middlewares array; 

export default store; 