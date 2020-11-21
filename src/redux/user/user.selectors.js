import {createSelector} from 'reselect'; 

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)


// READ ABOUT: SELECTOR CASES WITH MULTIPLE INPUT SELECTORS 