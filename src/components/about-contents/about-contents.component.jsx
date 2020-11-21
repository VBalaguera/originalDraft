import React from 'react';

import './about-contents.styles.scss'; 

const AboutContent = ({title, summary, category}) => (
    <div className='about-contents-container'>
    <h1>About content</h1>
    <h1 className='about-title'>{title}</h1>
    <h6 className='about-category'>{category}</h6>
    <p className='about-summary'>{summary}</p>
</div>
);

export default AboutContent; 

