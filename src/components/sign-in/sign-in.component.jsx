import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles.jsx';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name='password'
                        type='password'
                        value={this.state.password}
                        label='Password'
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;