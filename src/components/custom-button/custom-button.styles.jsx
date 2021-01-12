import styled, { css } from 'styled-components'; 

const buttonStyles = css`
    background-color: black;
    color: white; 
    border: 1px solid black; 

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;  
    }
`
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    font-family: initial;
    font-weight: 600; 
    opacity: .5; 
    position: absolute; 
    bottom: 20%; 
      
  
    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`;

const googleSignInStyles = css`
      background-color: #4285f4; 
      color: white; 
      

      &:hover {
        background-color: #357ae8; 
        border: none; 
      }
`; 

const showCaseButtonStyles = css`
	border: 2px solid crimson;
	background: transparent;
	color: crimson; 
	cursor: pointer;
	font-weight: bold; 
	transition: all .2s; 

    &:hover {
        background: crimson; 
        color: white;
        transition: all .2s; 
    }
`; 

const getButtonStyles = props => {
    
    if (props.isGoogleSignIn) {
        return googleSignInStyles; 
    }

    if (props.inverted) {
        return invertedButtonStyles; 
    } 

    if (props.showcase) {
        return showCaseButtonStyles; 
    }
    
    else {
        return buttonStyles;
    } 
}

export const CustomButtonContainer = styled.button`
    min-width: 5rem;
    width: auto;
    height: 3rem;
    letter-spacing: 0.3px;
    line-height: 3rem;
    padding: 0 2rem 0 2rem; 
    font-size: .9rem; 
     
    
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    
    ${getButtonStyles}
`;