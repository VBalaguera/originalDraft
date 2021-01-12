import styled from 'styled-components'; 

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  margin-bottom: 1rem;

  img {
    width: 30%;
  }
`;

export const CartItemContainerDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: .6rem 1.2rem;
`;

export const CartItemContainerDetailsName = styled.span`
    font-size: 1rem; 
`;

export const CartItemContainerDetailsPrice = styled.span`
    font-size: 1rem; 
`;