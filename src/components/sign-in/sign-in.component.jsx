import React from 'react';

import FormInput from '../../components/form-input/form-input.component'; 
import CustomButton from '../../components/custom-button/custom-button.component'; 

// after creating firebase.utils: 
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'; 

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

    handleSubmit = async event => {
        event.preventDefault(); 

        const { email, password } = this.state; 

        try {
            await auth.signInWithEmailAndPassword(email, password); 
            this.setState({ email: '', password: ''});

        } catch (error) {
            console.log(error); 
        }

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target; 

        this.setState({ [name]: value}); //whatever we type on each input becomes its respective value 
    }

    render() {
        return (
            <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
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


                <div className='buttons'>
                    <CustomButton type="submit" value="Submit Form">SIGN IN </CustomButton>

                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN with GOOGLE</CustomButton>
                </div>
            </form>
        </div>
        )
    }
}

export default SignIn; 

/* firebase 21.

    before: 
    <CustomButton onClick={signInWithGoogle}>SIGN IN with GOOGLE</CustomButton>

    after: 
    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN with GOOGLE</CustomButton>
*/