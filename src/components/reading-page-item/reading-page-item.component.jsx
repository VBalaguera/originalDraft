//READING-PAGE-ITEM EQUALS CHECKOUT-ITEM 

import React from 'react';
import { connect } from 'react-redux'; 

import { clearBookFromList } from '../../redux/reading/reading.actions.js'; 

import './reading-page-item.styles.scss'; 

const ReadingPageItem = ({readingItem, clearBook}) => {
    const { name, imageUrl, author } = readingItem; 
    return (
    <div className='reading-page-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>
            {name}
        </span>
        <span className='author'>
            {author}
        </span>
        <span className='description'>
            Description field pending
        </span>
        <div className='remove-button' onClick={() => clearBook(readingItem)}>
        &#10005;
        </div>
    </div>
    );
} 

const mapStateToProps = dispatch => ({
    clearBook: item => dispatch(clearBookFromList(item))
})

export default connect(
    null,
    mapStateToProps
)(ReadingPageItem); 