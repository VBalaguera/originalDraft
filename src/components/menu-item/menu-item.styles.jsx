import styled from 'styled-components'; 

export const MenuItemContents = styled.div`
      height: 5.5rem; 
      padding: 0 2rem; 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      justify-content: center;
      border: 0.5px solid black; 
      background-color: rgba($color: silver, $alpha: 0.5); 
      position: absolute; 
      opacity: 0.8; 
`; 

export const MenuItemContentsTitle = styled.h1`
          font-weight: 700; 
          margin-bottom: 0.4rem;
          font-size: 1.5rem; 
`; 

export const MenuItemContentsSubtitle = styled.h2`
font-weight: 500; 
          font-size: 1rem; 
`; 