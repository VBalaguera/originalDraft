import React from 'react'; 

import Background from '../../../src/images/womens.png'; 

import './banner.styles.scss';

const Banner = () => (
    <div className='banner'>
    <div 
        className='image'
        style = {{
            backgroundImage: `url(${Background})`
        }}
        />
    <div className='banner-text'>
        <span className='banner-title'>frugality</span>
        <span className='banner-subtitle'>click here to know more</span>
    </div>
</div>
)

export default Banner; 