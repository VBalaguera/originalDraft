import ReadingActionTypes from './reading.types';
import { addBookToList } from './reading.utils'; 

const INITIAL_STATE = {
    hidden: true,
    readingItems: []
};

const readingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ReadingActionTypes.TOGGLE_READING_HIDDEN:
            return {
                ...state, 
                hidden: !state.hidden
            };
        case ReadingActionTypes.ADD_BOOK: 
        return {
            ...state,
            readingItems: addBookToList(state.readingItems, action.payload)
        };
        default:
            return state; 
    }
};

export default readingReducer; 