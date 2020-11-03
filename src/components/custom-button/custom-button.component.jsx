import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;

/*

inputs and buttons can take the property of type, like type='submit' 

we pass children of the passed props into this comp, and destructuring the otherProps and spread them into this comp
*/