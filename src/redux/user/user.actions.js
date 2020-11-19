// REDUX 9. creating user.actions.js inside USER folder in REDUX folder;

// JUST A FUNCT THAT RETURNS AN OBJ. each OBJECT is in the correct format that the ACTION expects it to be: 
export const setCurrentUser = user => ({
    // user OBJ here is the parameter for this FUNCTION, regardless of what is user: could be userAuth, userSnapshot OBJ, null, etc.  

    type: 'SET_CURRENT_USER',
    // that is the same STRING the user REDUCER is expecting 
    // ALWAYS WRITE THEM WITH CAPS AND SNAKE CASE, we do not want to change them 

    payload: user 
    // we are setting the user as the PAYLOAD 
}); 

