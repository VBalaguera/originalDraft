import React from 'react';

import { AboutContentsContainer } from './about-contents.styles';

const AboutContent = ({title, summary, category}) => (
    <AboutContentsContainer>
        <h1>About content</h1>
        <h1 className='about-title'>{title}</h1>
        <h6 className='about-category'>{category}</h6>
        <p className='about-summary'>{summary}</p>
    </AboutContentsContainer>
);

export default AboutContent; 

