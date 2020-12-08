import { createSelector } from 'reselect'; 

const selectPosts = state => state.posts; 

export const selectPublications = createSelector(
    [selectPosts],
    posts => posts.publications
); 