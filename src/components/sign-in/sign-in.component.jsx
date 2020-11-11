import React from 'react';

import FormInput from '../../components/form-input/form-input.component'; 
import CustomButton from '../../components/custom-button/custom-button.component'; 

import './sign-in.styles.scss';

//we have to store what the users are typing in, so this is a class component

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault(); 

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target; 

        this.setState({ [name]: value}); //whatever we type on each input becomes its respective value 
    }

    render() {
        return (
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name="email" 
                type='email'
                value={this.state.email}
                handleChange={this.handleChange} 
                label='email'
                required />

                <FormInput 
                name="password" 
                type='password'
                value={this.state.password} 
                handleChange={this.handleChange} 
                label='password'
                required></FormInput>


                <CustomButton type="submit" value="Submit Form">SIGN IN </CustomButton>
            </form>
        </div>
        )
    }
}

export default SignIn; 