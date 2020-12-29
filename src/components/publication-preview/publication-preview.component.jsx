//PUBLICATION PREVIEW EQUALS COLLECTION PREVIEW
import React from 'react';

import PublicationItem from '../publication-item/publication-item.component'; 
import './publication-preview.styles.scss';

const PublicationPreview = ({title, items}) => (

    <div className='publications'>
        <h1 className='title'>
            {title.toUpperCase()}
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

export default PublicationPreview; 