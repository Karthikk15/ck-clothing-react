import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import logo from '../../assests/CK Clothing-logo.png';
import { connect } from 'react-redux';
import CartIcon from '../Cart-Icon/cart-icon.component';
import CartDropDown from '../Cart-DropDown/cart-dropdown.component';
import { selectCurrentUser } from '../Redux/Users/user.selector';
import { selectCartToggle } from '../Redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
const Header = ({currentUser, SignOut, isCartClicked}) => {
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
               (currentUser) ? <div className='option' onClick={SignOut}>SIGN OUT</div> :
               <Link to='/sign' className='option'>SIGN IN</Link>
             }
             <CartIcon />
          </div>
          { isCartClicked && <CartDropDown /> } 
        </div>
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