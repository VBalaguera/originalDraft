import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;

/* // firebase 19. 

before: 
const CustomButton = ({ children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

after

//we conditionally render using string interpolation: 

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => (

    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>

    isGoogleSignIn is a prop, if the component has that prop, it will render with class google-sign-in, if not it will be an empty string; custom-button is always rendered
);


*/

/*

inputs and buttons can take the property of type, like type='submit' 

we pass children of the passed props into this comp, and destructuring the otherProps and spread them into this comp
*/