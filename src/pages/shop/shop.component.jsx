//SHOP.COMPONENT EQUALS POSTS.COMPONENT
import React from 'react';
import { Route } from 'react-router-dom'; 

import './shop.styles.scss'; 

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'; 
import CollectionPage from '../collection/collection.component'; 

const ShopPage = ({ match }) => {
    console.log(match); 
    return (
        <div className='shop-page'>
            <div className='shop-page-content'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} /> 
                <Route path={`${match.path}/:collectionId`}  component={CollectionPage} /> 
            </div>
        </div>
    );
}

export default ShopPage; 