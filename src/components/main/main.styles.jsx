import styled from 'styled-components'; 

export const MainContainer = styled.div`
	display: flex;
	width: 70%;
	margin: auto; 
	min-height: 80vh;
    align-items: center;
    justify-content: space-between; 

    @media screen and (max-width: 900px) {
        display: flex; 
        flex-direction: column; 
		align-items: center; 
		justify-content: center;
		padding: 10px 0px; 
    }
`; 

export const MainContainerPitch = styled.div`
    flex: 1;

    @media screen and (max-width: 600px) {
        flex: none; 
    }
`; 

export const MainContainerPitchText = styled.div`

    display: flex; 
    flex-direction: column; 
    align-items: center; 

	h1 {
        font-size: 3rem;
        font-weight: 500;
    }

    p {
        margin-top: 5px;
        font-size: 22px;
        color: crimson; 
    }

    @media screen and (max-width: 900px) {

        h1 {
            font-size: 2.2rem; 
        }
         p {
		margin: 5px 0; 
	    }

	 img {
		padding: 1rem 0; 
	    }
    }
`; 

export const MainContainerPitchPointedWords = styled.span`
    font-size: 3rem;
    font-weight: 500;
    color: crimson; 

    @media screen and (max-width: 900px) {
        font-size: 2.2rem; 
    }
`;

export const MainContainerShowcase = styled.div`
    display: flex; 
    justify-content: space-around;  
    margin: 1rem; 
    
`;

