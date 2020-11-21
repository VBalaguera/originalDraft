//reading-list equals cart-dropdown 

import React from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect'; 
import { withRouter } from 'react-router-dom'; 

import CustomButton from '../custom-button/custom-button.component';
import ReadingItem from '../reading-item/reading-item.component'; 
import { selectReadingItems } from '../../redux/reading/reading.selectors'; 

import './reading-list.styles.scss'; 

const ReadingList = ({ readingItems, history }) => (
    <div className='reading-list'>
        <div className='reading-items'>
        {
            readingItems.length ? (
            readingItems.map(readingItem => (
                <ReadingItem key={readingItem.key} item={readingItem}/>
            ))
            ) : (
            <span className='empty-message'>Your list is empty</span>
        )}
        </div>
        <CustomButton onClick={() => history.push('/readinglist')}>READING LIST</CustomButton>
    </div>
); 

const mapStateToProps = createStructuredSelector({
    readingItems: selectReadingItems
})

export default withRouter(connect(mapStateToProps)(ReadingList)); 