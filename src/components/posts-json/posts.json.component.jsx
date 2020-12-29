import React from 'react';

import './posts.json.styles.scss'; 

class PostsJson extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            posts: [] //we will fill this
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({posts: data})); //filling the state 
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <div
                className='json-posts' 
                key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Post through Json</h1>
            { postItems }
            </div>
        ); 
    }
};

export default PostsJson; 
