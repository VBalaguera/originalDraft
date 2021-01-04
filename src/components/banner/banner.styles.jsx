import styled from 'styled-components'; 

import { Link } from 'react-router-dom'; 

export const BannerContainer = styled.div`
    width: 91%; 
    height: 9rem; 
    margin: auto; 
    padding: 0 1rem; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
`;

export const BannerImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover; 
    background-position: center;
`;

export const BannerText = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    color: white; 
`; 

export const BannerTitle = styled(Link)`
    font-size: 2rem; 
    font-weight: 700; 
    text-transform: uppercase;
`;

export const BannerSubtitle = styled(Link)`
    font-size: 1rem;
`;