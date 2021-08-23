import React from 'react';
import {ReactComponent as CartLogo} from '../../assests/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../Redux/Cart/cart.selectors';
import {ToggleCartDropDown} from '../Redux/Cart/cart.actions';

const CartIcon = ({handleClick, ItemsCount}) => {
    return (
 <div onClick={handleClick} className="cartIcon-container">
    <CartLogo className='cart-icon'/>
    <span className='item-count-span'>{ItemsCount}</span>
 </div>
    )
}
 
const mapStateToProps = (state) =>({
   ItemsCount : selectCartItemsCount(state)
})
 
 const mapDispatchToProps = (dispatch) => {
    return {
        handleClick : () => {
          dispatch(ToggleCartDropDown());
        }
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);