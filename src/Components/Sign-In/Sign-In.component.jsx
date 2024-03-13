import React from 'react';
import FormInput from '../Form-Input/form-input.component.jsx';
import CustomButton from '../Custom-Button/custom-button.component';
import './Sign-In.styles.scss';
import withRouter from '../../routes/components/withRouter';
import { signInWithGoogle, signInUserEmailAndPassword }   from '../firebase/firebase';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            'email': '',
            'password':'',
            'redirect': false
        }
    }
    
     handleSubmit = async (event) => {
      event.preventDefault();
      const {email, password} = this.state;
      try {
      const user = await signInUserEmailAndPassword(email, password);
      this.setState({email: '', password:'', ...(user ? {redirect: true} : {redirect: false} )});
      } catch(error) {
          alert(error.message);
      }
    }

   
    componentDidUpdate() {
      if(this.state.redirect) {
        this.props.router.navigate('/');
      }        
    }

    handleChange = (event) => {
     const {name, value} = event.target;
     this.setState({[name] : value});
    }

    logGoogleUser = async () => {
     const { user } = await signInWithGoogle();
     this.setState({email: '', password:'', ...(user ? {redirect: true} : {redirect: false} )});
   }

    render() {
        const {email, password} = this.state;
        return (
            <div className='sign-in-container'>
                <h1>I already have an account</h1>
                <p>Sign in with your email and password</p>
                <form className='form-ctn' onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={email} labelValue="Email" onChange={this.handleChange} ></FormInput>
                    <FormInput type='password' name='password' value={password} labelValue="Password" onChange={this.handleChange} ></FormInput>
                    <div className='button-ctn'>
                     <CustomButton value='SIGN IN'></CustomButton>
                     <CustomButton value='Sign In With Google' onClick ={this.logGoogleUser} isGoogle ></CustomButton>
                     </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SignIn);