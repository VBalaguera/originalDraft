//POSTS.COMPONENT EQUALS SHOP.COMPONENT
import React from 'react';
import { Route } from 'react-router-dom'; 

import './posts.styles.scss'; 

import PublicationsOverview from '../../components/publications-overview/publications-overview.component'; 
import PublicationPage from '../../pages/publication/publication.component'; 

import PostsJson from '../../components/posts-json/posts.json.component'; 

const PostsPage = ({ match }) => {
    console.log(match); 
    return (
        <div className='post-page'>
            <div className='post-page-content'>
                <Route exact path={`${match.path}`} component={PublicationsOverview} /> 
                <Route path={`${match.path}/:publicationId`} component={PublicationPage} /> 
            </div>
            <PostsJson /> 
        </div>
    );
}

export default PostsPage; 