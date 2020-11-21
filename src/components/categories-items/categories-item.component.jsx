//CATEGORIES ITEM EQUALS COLLECTION ITEM
import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addBook } from '../../redux/reading/reading.actions.js'; 

import './categories-item.styles.scss'; 

const CategoriesItem = ({item, addBook}) => {
    const { id, name, author, imageUrl, url } = item; //we're destructuring these off the item; why?¿ we want these values inside this comp, and also we need access to the item itself
    return (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='author'>{author}</span>
                <span className='url'><a href="www.google.com">{url}</a></span>
            </div>
            <CustomButton onClick={() => addBook(item)} inverted>READ NOW</CustomButton>
            
    </div>
)}; //this is called doing an explicit return of our FUNCTION 

const mapDispatchToProps = dispatch => ({
    addBook: item => dispatch(addBook(item))
}); 

export default connect(null, mapDispatchToProps)(CategoriesItem); 

//NOTE: I AM TAKING AWAY THIS PART BECAUSE I WILL FIGURE OUT HOW TO USE IT, MAYBE THROUGH REDIRECT OR SOME OTHER REACT AND/OR REDUX SET OF TOOLS: 
//                 <span className='url'><a href="www.google.com">{url}</a></span> 