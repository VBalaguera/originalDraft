import ReadingActionTypes from './reading.types';

export const toggleReadingHidden = () => ({
    type: ReadingActionTypes.TOGGLE_READING_HIDDEN
});

export const addBook = item => ({
    type: ReadingActionTypes.ADD_BOOK,
    payload: item
}); 

export const clearBookFromList = item => ({
    type: ReadingActionTypes.CLEAR_BOOK_FROM_LIST,
    payload: item
})


