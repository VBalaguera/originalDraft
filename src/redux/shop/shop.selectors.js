import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
} //this maps the string value to its respective id; the string value that we're getting from our url param will be the actual property; to confirm which is which, we just need to look up all stored properties in Redux 
// we're going to pass that string and then  use it as the dynamic value of the prop to get the correct Id; then, match in our selector

const selectShop = state => state.shop; 

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
); 

//said selector is this one: 
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    ); 

/*
find(
    collection.id matches the [collectionUrlParam] our COLLECTION_ID_MAP
)
we're just matching numbers here; 
*/