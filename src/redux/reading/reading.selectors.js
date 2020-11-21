import { createSelector } from 'reselect';

const selectReading = state => state.reading; 

export const selectReadingItems = createSelector(
    [selectReading],
    (reading) => reading.readingItems
); 