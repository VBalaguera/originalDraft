import React from 'react';
import { connect } from 'react-redux'; 

import { toggleReadingHidden } from '../../redux/reading/reading.actions.js'; 
import {ReactComponent as BookIcon} from '../../assets/open-book.svg';
// THIS IS A PLACEHOLDER

import './reading-icon.styles.scss'; 

const ReadingIcon = ({ toggleReadingHidden }) => (
    <div className='reading-icon'
    onClick={toggleReadingHidden}>
        <BookIcon className='book-icon'></BookIcon>
    </div>
); 

const mapDispatchToProps = dispatch => ({
    toggleReadingHidden: () => dispatch(toggleReadingHidden())
})

export default connect(null, mapDispatchToProps)(ReadingIcon); 

// NOTE, THERE WILL NO QUANTITY HERE; BUT I HAVE TO FIGURE OUT HOW TO MODIFY THE WHOLE ICON COLOR/REPLACE IT WITH ANOTHER ICON OR MAKE VISIBLE A SMALL, CIRCULAR, RED-COLORED DIV INSIDE TO NOTIFY THE USER THAT THERE ARE THINGS TO READ INSIDE THE LIST