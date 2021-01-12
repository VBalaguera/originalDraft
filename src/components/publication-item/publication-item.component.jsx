//CATEGORIES ITEM EQUALS COLLECTION ITEM
import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addBook } from '../../redux/reading/reading.actions.js'; 

import './publication-item.styles.scss'; 

const PublicationItem = ({item, addBook}) => {
    const { name, author, imageUrl } = item; 
    return (
            <div className='publication-item'>
                <div
                    className='image'
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                    />
                <div className='publication-footer'>
                    <span className='name'>{name}</span>
                    <span className='author'>{author}</span>
                </div>
                <CustomButton onClick={() => addBook(item)} inverted>READ NOW</CustomButton>
            
            </div>
)}; 

const mapDispatchToProps = dispatch => ({
    addBook: item => dispatch(addBook(item))
}); 

export default connect(null, mapDispatchToProps)(PublicationItem); 