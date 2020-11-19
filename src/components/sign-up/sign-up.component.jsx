// firebase 30. creating the sign up component

import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createdUserProfileDocument, createUserProfileDocument } from '../../firebase/firebase.utils.js';

class SignUp extends React.Component {
    constructor(){
        super(); 

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        //prevents submitting by default 
        //also, we want to create a new user

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return; 
        }

        try { //we will use a new auth method that comes with the library called createUserWithEmailAndPassword
            const { user } = await auth.createUserWithEmailAndPassword(email, password); 

            await createUserProfileDocument(user, { displayName });
            //we write await because if createUserProfileDocument succeeds, we want to reset the state 
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
                //we're setting the state to its initial state here, thus clearing the form
            })
        } catch (error) {
            console.error(error); 
        }
    };

    handleChange = event => {
        const { name, value } = event.target; 

        this.setState({ [name]: value}); //this sets dynamically both object properties with their respective values
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your mail and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={ //destructured values from the state 
                        displayName
                    }
                    onChange={this.handleChange}
                    label='Display Name'
                    required/>

                    
                    <FormInput
                    type='email'
                    name='email'
                    value={ //destructured values from the state 
                        email
                    }
                    onChange={this.handleChange}
                    label='Mail'
                    required/>

                    
                    <FormInput
                    type='password'
                    name='password'
                    value={ //destructured values from the state 
                        password
                    }
                    onChange={this.handleChange}
                    label='Password'
                    required/>

                    
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={ //destructured values from the state 
                        confirmPassword
                    }
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required/>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            
            </div>
        )
    }
}

export default SignUp;