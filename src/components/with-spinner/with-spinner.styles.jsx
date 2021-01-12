import styled from 'styled-components'; 

export const SpinnerOverlay = styled.div`
    height: 50vh;
    width: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center;  
`; 

export const SpinnerContainer = styled.div`
    display: inline-block;
    width: 3rem;
    height: 3rem; 
    border: 2px solid (255, 255, 255, 0.9);
    border-radius: 50%; 
    border-top-color: crimson; 
    animation: spin .8s ease-in-out infinite; 

    @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
        }
    }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
        }
    }
`; 