// reading-item.component equals cart-item.component 

import React from 'react';

import './reading-item.styles.scss';

//NOTE: WE DO NOT NEED THE QUANTITY PROP HERE

const ReadingItem = ({ item: {imageUrl, author, name } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='author'>written by {author}</span>
        </div>
    </div>
)

export default CartItem; 