//POSTS EQUALS SHOP
import React from 'react';

import './posts.styles.scss'; 

import Categories from '../../components/categories/categories.component'; 

import POSTS_DATA from './post.data.js';

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
            
            <div className='post-page'>
                <div className='post-page-content'>
                    <div className='identifier'>
                        POSTS
                    </div>
                    {
                        collections.map(({id, ...otherCollectionProps}) => (
                            <Categories key={id} {...otherCollectionProps}/>
                        ))
                    }
                </div>
            </div>
        );
    }
};

export default PostsPage; 