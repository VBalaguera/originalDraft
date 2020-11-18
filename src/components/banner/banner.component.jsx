import React from 'react'; 
import { Link } from 'react-router-dom'; 

import Background from '../../images/backgrounds/photo-1605456934970-1f1f2541f90b.webp'; 
//pending learning how to set resources from external sites, in this case a background picture

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
        <Link to="/" className='banner-title'>frugality</Link>
        <Link to='/about' className='banner-subtitle'>click here to know more</Link>
    </div>
</div>
)

export default Banner; 