//CATEGORIES ITEM EQUALS COLLECTION ITEM
import React from 'react';

import './categories-item.styles.scss'; 

const CategoriesItem = ({name, price, imageUrl}) => (
    <div className='categories-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
            />
            <div className='item-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
    </div>
);

export default CategoriesItem; 