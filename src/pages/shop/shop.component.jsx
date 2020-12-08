//SHOP EQUALS POSTS
import React from 'react';

import './shop.styles.scss'; 

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'; 


const ShopPage = ({ collections }) => (
            <div className='shop-page'>
                <div className='shop-page-content'>
                    <div className='shop-content-title'>
                        SHOP
                    </div>
                    <CollectionsOverview /> 
                </div>
            </div>
        );

export default ShopPage; 