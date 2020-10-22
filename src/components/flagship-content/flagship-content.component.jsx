import React from 'react';
import { withRouter } from 'react-router-dom';

import './flagship-content.styles.scss';

const FlagshipContent = ({secTitle, secSubtitle, imageUrl, size, history, linkUrl, match}) => (
    <div 
    className={`${size} flagship-content`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(FlagshipContent);