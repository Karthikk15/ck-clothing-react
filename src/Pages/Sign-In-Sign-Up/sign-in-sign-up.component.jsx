import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../../Components/Sign-In/Sign-In.component';
import SignUp from '../../Components/Sign-Up/Sign-Up.component';
import './sign-in-sign-up.styles.scss';
const Sign = ({currentUser}) => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(currentUser)
        navigate('/');
    },[currentUser])
    return (
         <div className="sign-pg-container">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default Sign;