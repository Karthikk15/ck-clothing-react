import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.js';
import logo from '../../assests/CK Clothing-logo.png';
import { connect, useSelector } from 'react-redux';
import CartIcon from '../Cart-Icon/cart-icon.component';
import CartDropDown from '../Cart-DropDown/cart-dropdown.component';
import { selectCurrentUser } from '../Redux/Users/user.selector';
import { selectCartToggle } from '../Redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { Outlet } from 'react-router-dom';
import { userContext } from '../../contexts/userContext';
import { signOutUser } from '../firebase/firebase';
import { HeaderContainer, OptionContainer, Option, LogoStyle } from './header.style.js';
const Header = ({isCartClicked}) => {
    const currentUser= useSelector(selectCurrentUser);
    return (
      <>
        <HeaderContainer>
          <div>
            <Link to='/'>
               <LogoStyle  className='logo' src={logo} alt="logo" />
            </Link>
          </div>
          <OptionContainer>
             <Option to='/shop' >SHOP</Option>
             <Option to='/shop' >CONTACT</Option>
             {
               (currentUser) ? <Option as='div' onClick={signOutUser}>SIGN OUT</Option> :
               <Option to='/sign'>SIGN IN</Option>
             }
             <CartIcon />
          </OptionContainer>
          { isCartClicked && <CartDropDown /> } 
        </HeaderContainer>
        <Outlet />
        </>
    )
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  isCartClicked : selectCartToggle
})
// (state) => {
//  return {
//    currentUser : selectCurrentUser(state),
//    isCartClicked : selectCartToggle(state)
//  };
// }

export default connect(mapStateToProps)(Header);