import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import logo from '../../assests/CK Clothing-logo.png';
const Header = ({currentUser, SignOut}) => {
    return (
        <div className='header-container'>
          <div className="logo-container">
            <Link to='/'>
               <img  className='logo' src={logo} alt="logo" />
            </Link>
          </div>
          <div className="option-container">
             <Link to='/shop' className='option'>SHOP</Link>
             <Link to='/shop' className='option'>CONTACT</Link>
             {
               (currentUser) ? <div className='option' onClick={SignOut}>Sign-Out</div> :
               <Link to='/sign' className='option'>SIGN IN</Link>
             }
          </div> 
        </div>
    )
}

export default Header;