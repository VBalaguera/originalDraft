//POSTS EQUALS SHOP
import React from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect'; 

import './posts.styles.scss'; 

import Categories from '../../components/categories/categories.component'; 

import { selectPublications } from '../../redux/posts/posts.selectors'; 

const PostsPage = ({ publications }) => (

            <div className='post-page'>
                <div className='post-page-content'>
                    <div className='identifier'>
                        POSTS
                    </div>
                    {
                        publications.map(({id, ...otherPublicationProps}) => (
                            <Categories key={id} {...otherPublicationProps}/>
                        ))
                    }
                </div>
            </div>
        );

const mapStateToProps = createStructuredSelector({
    publications: selectPublications
});

export default connect(mapStateToProps)(PostsPage); 