import PostsActionTypes from './posts.types'; 

export const updatePublications = (publicationsMap) => ({
    type: PostsActionTypes.UPDATE_PUBLICATIONS,
    payload: publicationsMap
}); 