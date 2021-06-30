import React from 'react';
import FormInput from '../Form-Input/form-input.component';
import CustomButton from '../Custom-Button/custom-button.component';
import './Sign-In.styles.scss';
import { signInWithGoogle }   from '../firebase/firebase';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            'email': '',
            'password':''
        }
    }

     handleSubmit = (event) => {
      event.preventDefault();
      this.setState({email: '', password:''});
    }
    
    handleChange = (event) => {
     const {name, value} = event.target;
     this.setState({[name] : value});
    }


    render() {
        const {email, password} = this.state;
        return (
            <div className='sign-in-container'>
                <h1>I already have an account</h1>
                <p>Sign in with your email and password</p>
                <form className='form-ctn' onSubmit={this.handleSubmit}>
                    <FormInput type='email' value={email} labelValue="Email" onChange={this.handleChange} ></FormInput>
                    <FormInput type='password' value={password} labelValue="Password" onChange={this.handleChange} ></FormInput>
                    <div className='button-ctn'>
                     <CustomButton value='Sign In'></CustomButton>
                     <CustomButton value='Sign In with Google' onClick ={signInWithGoogle} isGoogle ></CustomButton>
                     </div>
                </form>
            </div>
        )
    }
}

export default SignIn;