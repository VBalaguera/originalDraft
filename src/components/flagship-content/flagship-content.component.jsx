import React from 'react';

import './flagship-content.styles.scss';

const FlagshipContent = ({secTitle, secSubtitle, imageUrl, size}) => (
    <div 
    className={`${size} flagship-content`}>
        <div className='background-image' 
            style={{
        backgroundImage: `url(${imageUrl})`
    }}
        />
        <div className='flagship-container'>
            <h1 className='flagship-secTitle'>
                {secTitle}
            </h1>
            <h2 className='flagship-secSubtitle'>
                {secSubtitle}
            </h2>
        </div>
    </div>
)

export default FlagshipContent;