// PUBLICATION.COMPONENT EQUALS COLLECTION.COMPONENT
import React from 'react';
import { connect } from 'react-redux'; 

import './publication.styles.scss';

import PublicationItem from '../../components/publication-item/publication-item.component'; 

import { selectPublication } from '../../redux/posts/posts.selectors'; 

const PublicationPage = ({ publication }) => {
    console.log(publication); 
    return (
        <div className='publication'>
            <h2>PUBLICATION PAGE</h2>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    publication: selectPublication(ownProps.match.params.publicationId)(state)
}); 

export default connect(mapStateToProps)(PublicationPage); 