// REDUX 5. creating user.reducer.js into USER FOLDER IN REDUX FOLDER and writing some code in it; 
// a REDUCER is a funct that gets two props: a STATE object (last state or initial state), and the ACTION. 

const INITIAL_STATE = {
    // AN OBJECT THAT REPRESENTS THE INITIAL STATE OF THIS REDUCER, like instanciating the initial value of state in App.js:
    currentUser: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    //the STATE is something the STORE passes it to the REDUCER when an ACTION occurs. The STATE will be on its current STATE when the ACTION occurs. Thus, the first time we fire the STATE for the first time it will be nothing. THAT IS WHY WE NEED INITIAL_STATE
    // we are using state = INITIAL_STATE as the DEFAULT PARAMETER, AND IS AN ES6 feature for functions. Meaning, if STATE is undefined, it will reach the INITIAL value we passed it. 
    // now we have to figure out how to return the STATE conditioned by the ACTION. Thus, the SWITCH
    //if/else are also valid

    switch (action.type) { 
        //action.type is a STRING
        case 'SET_CURRENT_USER': 
        //if the action matches this type: 
            return {
               ...state, 
               //we spread the values of the STATE because we only want to modify specific ones, not all of them 
                currentUser: action.payload 
                //this is the value we want to modify
            }
        default: 
        //if none of the ACTION types match, we want to return the STATE as it is. 
            return state;
    }
}

export default userReducer; 