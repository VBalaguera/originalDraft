import styled from 'styled-components'; 
//{ css } is to avoid duplication and for subclasses such as option, which was a subclass of options in this case; this will occur many times in the future 
// { css } allows us to write a block of css inside a const and render it 

import { Link } from 'react-router-dom'; 

//replacing the header container: 
export const HeaderContainer = styled.div`
  height: 4.5rem;
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem; 
`; 

//replacing Link
export const LogoContainer = styled(Link)`
      height: 100%;
      width: 7rem;
      padding: 2rem; 
      display: flex; 
      align-items: center; 
      justify-content: center;
`; 
// by using styled(Link) we extended styled-components into comps

//replacing options: 
export const OptionsContainer = styled.div`
      width: 50%;
      height: 100%; 
      display: flex; 
      font-weight: bolder; 
      align-items: center;
      justify-content: flex-end;
      margin: 1rem; 
`;

//
/* const OptionContainerStyles = css`
    padding: .8rem 1.5rem;
          cursor: pointer; 
` */
//after importing { css } here, we are going to share/reuse the option css here this way

//since we have two types of option, option Link and option div, we will do this: 
export const OptionLink = styled(Link)`
    padding: .8rem 1.5rem;
    cursor: pointer; 
`;
//string interpolation to render the new OptionContainerStyles we wrote

/* export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`; */

//after finishing this, let´s go back to header.component; 

