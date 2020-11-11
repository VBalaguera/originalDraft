//POSTS EQUALS SHOP
import React from 'react';

import './posts.styles.scss'; 

import Categories from '../../components/categories/categories.component'; 

//using SHOP_DATA as a temp placeholder: 
import POSTS_DATA from './post.data.js';
import SinglePost from '../../components/single-post/single-post.component';

class PostsPage extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            collections: POSTS_DATA //temporary placeholder
        };
    }

    render() {
        const {collections} = this.state; 
        return(
            
            <div className='posts'>
                <div className='identifier'>
                    POSTS
                </div>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <Categories key={id} {...otherCollectionProps}/>
                    ))
                }
                <SinglePost></SinglePost>
            </div>
        );
    }
};

export default PostsPage; 