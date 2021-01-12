import styled from 'styled-components'; 

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 22rem;
  align-items: center;
  position: relative;
`;

export const CollectionItemContainerImg = styled.div`
      width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center; 
      margin-bottom: 0.5rem; 
`;

export const CollectionItemContainerCollectionFooter = styled.div`
      width: 100%;
      height: 5%;
      display: flex; 
      justify-content: space-between;
      font-size: 1.2rem;
`;

export const CollectionItemContainerCollectionFooterName = styled.span`
          width: 90%;
          margin-bottom: 1rem; 
`;

export const CollectionItemContainerCollectionFooterPrice = styled.span`
          width: 10%;
`;

