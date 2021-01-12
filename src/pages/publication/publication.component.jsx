// PUBLICATION.COMPONENT EQUALS COLLECTION.COMPONENT
import React from 'react';
import { connect } from 'react-redux'; 

import './publication.styles.scss';

import PublicationItem from '../../components/publication-item/publication-item.component'; 

import { selectPublications } from '../../redux/posts/posts.selectors'; 

const PublicationPage = ({ publications }) => {
    const { title, items } = publications; 
    console.log(publications); 
    return (
        <div className='publication-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <PublicationItem 
                        key={item.id} 
                        item={item} />
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    publication: selectPublications(ownProps.match.params.publicationId)(state)
}); 

export default connect(mapStateToProps)(PublicationPage); 