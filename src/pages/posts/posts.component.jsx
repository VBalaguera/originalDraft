//POSTS EQUALS SHOP
import React from 'react';

import './posts.styles.scss'; 

import PublicationsOverview from '../../components/publications-overview/publications-overview.component'; 

const PostsPage = ({ publications }) => (

            <div className='post-page'>
                <div className='post-page-content'>
                    <div className='identifier'>
                        POSTS
                    </div>
                    <PublicationsOverview /> 
                </div>
            </div>
        );



export default PostsPage; 