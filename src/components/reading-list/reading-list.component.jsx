//reading-list equals cart-dropdown 

import React from 'react';
import { connect } from 'react-redux'; 

import CustomButton from '../custom-button/custom-button.component';
import ReadingItem from '../reading-item/reading-item.component'; 

import './reading-list.styles.scss'; 

const ReadingList = () => (
    <div className='reading-list'>
        <div className='reading-items'>

        </div>
        <CustomButton>READING LIST</CustomButton>
    </div>
); 

const mapStateToProps = ({ list: { }})

export default ReadingList; 