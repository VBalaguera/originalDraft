import { createSelector } from 'reselect'; 

const selectFlagship = state => state.flagship; 

export const selectFlagshipContents = createSelector(
    [selectFlagship],
    flagship => flagship.contents
); 