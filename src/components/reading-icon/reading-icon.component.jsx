import React from 'react';

import {ReactComponent as BookIcon} from '../../assets/open-book.svg';
// THIS IS A PLACEHOLDER

import './reading-icon.styles.scss'; 

const ReadingIcon = () => (
    <div className='reading-icon'>
        <BookIcon className='book-icon'></BookIcon>
    </div>
); 

export default ReadingIcon; 

// NOTE, THERE WILL NO QUANTITY HERE; BUT I HAVE TO FIGURE OUT HOW TO MODIFY THE WHOLE ICON COLOR/REPLACE IT WITH ANOTHER ICON OR MAKE VISIBLE A SMALL, CIRCULAR, RED-COLORED DIV INSIDE TO NOTIFY THE USER THAT THERE ARE THINGS TO READ INSIDE THE LIST