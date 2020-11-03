import React from 'react';

import './form-input.styles.scss'; 
                    //1. handleChange to organize the given input
                    // 2. ...otherProps are the values from the form 
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>

        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ? (
                <label 
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
                >
                {label}
                </label>
            ) : null
        }
    </div>
); 

export default FormInput; 

//where do we put the state here? this is a functional component, we don't want any;
/*
// if the value is in, we apply the shrink class; if not, it will be an empty string; both possibilities will always be form-inputs-label 


*/