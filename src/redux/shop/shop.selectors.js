import { createSelector } from 'reselect';

const selectShop = state => state.shop; 

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
); 

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
// object.keys gets us all of the keys of an obj that we pass into it, and returns them in arr format; 
/* i.e: 
const testObject = { a: 1, b: 2, c: 3}
Object.keys(testObject)
["a", "b", "c"]

Object.keys(collections) will get the keys off collections. We have now all of the object values; 
.map(key => collections[key]) is to put said values into an array 

Object.keys(collections).map(key => collections[key])
We want to get all the keys and map them to get the values of our collections object at that key. 
*/ 

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    ); 

