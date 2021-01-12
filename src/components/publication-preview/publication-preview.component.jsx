//PUBLICATION PREVIEW EQUALS COLLECTION PREVIEW
import React from 'react';
import { withRouter } from 'react-router-dom'; 

import PublicationItem from '../publication-item/publication-item.component'; 
import './publication-preview.styles.scss';

const PublicationPreview = ({title, items, history, match, routeName }) => (

    <div className='publications'>
        <h1 className='title'
            onClick={() => history.push(`${match.path}/${routeName}`)}
            >{title.toUpperCase()}
        </h1>
        <div className='publications-previews'>
            {
                items.filter((item, idx) => idx < 4)
                .map((item) => (
                    <PublicationItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
);

export default withRouter(PublicationPreview); 