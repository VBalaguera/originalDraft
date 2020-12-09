// COLLECTION.COMPONENT EQUALS PUBLICATION.COMPONENT 
import React from 'react';
import { connect } from 'react-redux'; 

import CollectionItem from '../../components/collection-item/collection-item.component'; 

import { selectCollection } from '../../redux/shop/shop.selectors'; 

import './collection.styles.scss'; 

const CollectionPage = ({ collection }) => {
    console.log(collection);
    return (
        <div className='collection-page'>
            <h2>COLLECTION PAGE</h2>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
//ownProps is the props of the component that we're wrapping it our connect 
// since sellectCollection is returning a createSelector() call, createSelector() returns as a function that takes the state and runs it through the selector flow, we pass state here after invoking sellectCollection(). This is necessary because unlike other selectors, this selector needs a part of the state depending on the URL parameter. 

export default connect(mapStateToProps)(CollectionPage); 