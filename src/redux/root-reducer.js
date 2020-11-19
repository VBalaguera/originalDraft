// REDUX 4. root-reducer.js creation: 
// we are breaking the code into its individual sections for management and practical reasons. 

// REDUX 6. on root-reducer, we bring in user.reducer, but first: 
import { combineReducers } from 'redux'; 

import userReducer from './user/user.reducer'; 

//this will export out the result of combineReducers as the default value: 
export default combineReducers({ 
    //this is an OBJECT where the KEY goes to the actual reducer that we want
    user: userReducer // user is the KEY that represents a specific slice/piece of the STATE (i.e. REDUCERS)

}); 
// REMEMBER: all the state in REDUX is just a huge JSON OBJECT; 
