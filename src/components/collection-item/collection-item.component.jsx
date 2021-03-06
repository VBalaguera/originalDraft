import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, CollectionItemContainerImg, CollectionItemContainerCollectionFooter, CollectionItemContainerCollectionFooterName, CollectionItemContainerCollectionFooterPrice } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionItemContainerImg
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionItemContainerCollectionFooter>
        <CollectionItemContainerCollectionFooterName>{name}</CollectionItemContainerCollectionFooterName>
        <CollectionItemContainerCollectionFooterPrice>{price}</CollectionItemContainerCollectionFooterPrice>
      </CollectionItemContainerCollectionFooter>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
