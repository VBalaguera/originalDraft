import POSTS_DATA from './post.data'; 

const INITIAL_STATE = {
    publications: POSTS_DATA
};

const postsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
};

export default postsReducer; 