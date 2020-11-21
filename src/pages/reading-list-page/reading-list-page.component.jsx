//reading-list-page equals checkout  
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import ReadingPageItem from '../../components/reading-page-item/reading-page-item.component'; 

import { selectReadingItems } from '../../redux/reading/reading.selectors'; 

import './reading-list-page.styles.scss';

const ReadingListPage = ({readingItems}) => (
    <div className='reading-list-page'>
        <div className='list-header'>
            <div className='header-block'>
                <span>
                    NAME
                </span>
            </div>
            <div className='header-block'>
                <span>
                    AUTHOR
                </span>
            </div>
            <div className='header-block'>
                <span>
                    DESCRIPTION
                </span>
            </div>
            <div className='header-block'>
                <span>
                    REMOVE
                </span>
            </div>
        </div>
        {
            readingItems.map(readingItem => (
                <ReadingPageItem key={readingItem.id} readingItem={readingItem}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    readingItems: selectReadingItems
})

export default connect(mapStateToProps)(ReadingListPage); 