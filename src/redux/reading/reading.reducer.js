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
        case ReadingActionTypes.CLEAR_BOOK_FROM_LIST:
            return {
                ...state,
                readingItems: state.readingItems.filter(readingItem => readingItem.id !== action.payload.id)
            }
        default:
            return state; 
    }
};

export default readingReducer; 