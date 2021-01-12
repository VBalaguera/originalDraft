import PostsActionTypes from './posts.types'; 

const INITIAL_STATE = {
    publications: null
};

const postsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PostsActionTypes.UPDATE_PUBLICATIONS:
            return {
                ...state, 
                publications: action.payload
            }
        default:
            return state
    }
};

export default postsReducer; 