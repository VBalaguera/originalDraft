//SHOP EQUALS POSTS
import React from 'react';

import './shop.styles.scss'; 

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state; 
        return (
            <div className='shop-page'>
                <div className='shop-page-content'>
                    <div className='shop-content-title'>
                        SHOP
                    </div>
                    {
                        collections.map(({id, ...otherCollectionProps}) => (
                            <CollectionPreview key={id} {...otherCollectionProps}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ShopPage; 