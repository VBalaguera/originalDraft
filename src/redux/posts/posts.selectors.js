import { createSelector } from 'reselect'; 

const selectPosts = state => state.posts;

export const selectPublications = createSelector(
    [selectPosts],
    posts => posts.publications
  );

export const selectPublicationsForPreview = createSelector(
    [selectPublications],
    publications => 
        publications ? Object.keys(publications).map(key => publications[key]) : []
); 

export const selectPublication = publicationUrlParam => 
    createSelector(
        [selectPublications],
        publications => (publications ? publications[publicationUrlParam] : null)
    ); 