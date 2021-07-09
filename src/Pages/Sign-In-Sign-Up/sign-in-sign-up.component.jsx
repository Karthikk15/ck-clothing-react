import React from 'react';
import SignIn from '../../Components/Sign-In/Sign-In.component';
import SignUp from '../../Components/Sign-Up/Sign-Up.component';
import './sign-in-sign-up.styles.scss';
const Sign = () => {
    return (
        <div className="sign-pg-container">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default Sign;