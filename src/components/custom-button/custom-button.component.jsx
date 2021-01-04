import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...props}) => (
  //we do not need more specificity, because all of it is right now in custom-button.styles.jsx 

  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
