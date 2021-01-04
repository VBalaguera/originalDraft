import React from 'react'; 


import Background from '../../images/backgrounds/photo-1605456934970-1f1f2541f90b.webp'; 
//pending learning how to set resources from external sites, in this case a background picture

import { BannerContainer, BannerImage, BannerText, BannerTitle, BannerSubtitle } from './banner.styles'; 

const Banner = () => (
    <BannerContainer>
    <BannerImage
        style = {{
            backgroundImage: `url(${Background})`
        }}
        />
    <BannerText>
        <BannerTitle to="/">frugality</BannerTitle>
        <BannerSubtitle to='/about'>click here to know more</BannerSubtitle>
    </BannerText>
</BannerContainer>
)

export default Banner; 