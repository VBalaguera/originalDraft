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
//those css values come from CustomButtonContainer 

//here, all the .inverted
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    font-family: initial;
    font-weight: 600; 
      
  
    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`;

//here, all .google-sign-in: 
const googleSignInStyles = css`
      background-color: #4285f4; 
      color: white; 
      

      &:hover {
        background-color: #357ae8; 
        border: none; 
      }
`; 

//now, we will write a function that will be called inside CustumButtonContainer; 
const getButtonStyles = props => {
    //this will return different styles, depending on what we have; 
    
    if (props.isGoogleSignIn) {
    //isGoogleSignIn are props that came from custom-button.component; 
        return googleSignInStyles; 
    }

    return props.inverted ? invertedButtonStyles : buttonStyles; 
    //if we have inverted props, it will call its own styles: invertedButtonStyles; if not, we will go to the default buttonStyles 
}

//here, all .custom-button styles 
export const CustomButtonContainer = styled.button`
    min-width: 10rem;
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
// ${getButtonStyles} calls all its css values