//CATEGORIES ITEM EQUALS COLLECTION ITEM
import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './categories-item.styles.scss'; 

const CategoriesItem = ({name, price, imageUrl, url}) => (
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
                <span className='url'><a href="www.google.com">{url}</a></span> 
            </div>
            <CustomButton inverted>READ MORE</CustomButton>
    </div>
);

export default CategoriesItem; 