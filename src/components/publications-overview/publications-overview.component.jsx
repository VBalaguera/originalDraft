import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PublicationPreview from '../../components/publication-preview/publication-preview.component'; 
import { selectPublicationsForPreview } from '../../redux/posts/posts.selectors'; 

import './publications-overview.styles.scss'; 

const PublicationsOverview = ({ publications }) => (
    <div className='publications-overview'>
        {
            publications.map(({id, ...otherPublicationProps}) => (
                <PublicationPreview key={id} {...otherPublicationProps}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    publications: selectPublicationsForPreview
});

export default connect (mapStateToProps)(PublicationsOverview); 