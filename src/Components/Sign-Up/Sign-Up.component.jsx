import React from 'react';
import './Sign-Up.styles.scss';
import FormInput from '../Form-Input/form-input.component';
import CustomButton from '../Custom-Button/custom-button.component';
import {addUserInfoInDb, createUserEmailAndPassword} from '../firebase/firebase';
class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            'displayName': '',
            'email': '',
            'password': '',
            'confirmPassword': ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password === confirmPassword) {
            try {
                const { user } = await createUserEmailAndPassword(email, password);
                 await addUserInfoInDb(user, {displayName});
                this.setState({
                    'displayName': '',
                    'email': '',
                    'password': '',
                    'confirmPassword': ''
                });
            } catch (error) {
                alert(error.message); 
            }
        } else {
            alert("Password doesn't matched");  
        }
        
      }
      
      handleChange = (event) => {
       const {name, value} = event.target;
       this.setState({[name] : value});
      }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up-container'>
                <h1>I don't have an account</h1>
                <p>Sign up with your email and password</p>
                <form className='form-ctn' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name ='displayName' value={displayName} labelValue="Display Name" onChange={this.handleChange} ></FormInput>
                    <FormInput type='email' name='email' value={email} labelValue="Email" onChange={this.handleChange} ></FormInput>
                    <FormInput type='password' name='password' value={password} labelValue="Password" onChange={this.handleChange} ></FormInput>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} labelValue="Confirm Password" onChange={this.handleChange} ></FormInput>
                    <CustomButton value='SIGN UP'></CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;