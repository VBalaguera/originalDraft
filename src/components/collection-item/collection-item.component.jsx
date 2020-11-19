//COLLECTION ITEM EQUALS CATEGORIES ITEM 

import React from 'react';
import { connect } from 'react-redux'; 

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions'; 



import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
    const { id, name, price, imageUrl} = item; //we're destructuring these off the item; why?¿ we want these values inside this comp, and also we need access to the item itself
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
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>READ MORE</CustomButton>
            
    </div>
)}; //this is called doing an explicit return of our FUNCTION 

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
}); 

export default connect(null, mapDispatchToProps)(CollectionItem); 

