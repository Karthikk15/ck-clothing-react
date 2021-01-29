import React from 'react';
import './SignIn.style.scss';
import FormInput from '../Form-input/formInput.component';
import CustomButton from '../Custom-Button/custom-button.component';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': ''
        }
    }
    
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            'email': '',
            'password': ''
        })
    }

    handleChange = event => {  
     const {name, value} = event.target;
     this.setState({[name] : value})
    }
render() {
    return (
        <div className='SignIn'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
        <form onSubmit ={this.submitForm}>
            <FormInput name="email" type="email" label ="Email" handleChange={this.handleChange} value = {this.state.email} required></FormInput>
           
            <FormInput name="password" type="password" label="Password" handleChange={this.handleChange} value = {this.state.password} required></FormInput>
            <CustomButton type="submit">Submit Form</CustomButton>
        </form>
        </div>
    )
}
   
}

export default SignIn;