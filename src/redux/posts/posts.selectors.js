import { createSelector } from 'reselect'; 

const PUBLICATION_ID_MAP = {
    futureNews: 1,
    happenings: 2, 
    reviews: 3, 
    articles: 4, 
    recommendations: 5
}

const selectPosts = state => state.posts; 

export const selectPublications = createSelector(
    [selectPosts],
    posts => posts.publications
); 

export const selectPublication = publicationUrlParam => 
    createSelector(
        [selectPublications],
        publications => publications.find(publication => publication.id === PUBLICATION_ID_MAP[publicationUrlParam])
    )