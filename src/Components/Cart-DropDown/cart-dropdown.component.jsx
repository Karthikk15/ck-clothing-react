import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-Button/custom-button.component';
import CartItem from '../Cart-Item/cart-item.component';
import withRouter from '../../routes/components/withRouter';
// import './cart-dropdown.styles.css';
// import {cartDropDownContainer, EmptyCart, CartItems} from './cart-dropdown.styles'
import { selectCartItems } from '../Redux/Cart/cart.selectors';
import { ToggleCartDropDown } from '../Redux/Cart/cart.actions';
import { CartDropDownContainer, CartItems, EmptyCart } from './cart-dropdown.styles.js';
const CartDropDown = ({cartItems, router, dispatch}) => {
 return (
 <CartDropDownContainer>
        <CartItems>
         {
             cartItems.length ?
             cartItems.map((item) => {
                return <CartItem key = {item.id} item = {item} />
             }) : <EmptyCart>Your cart Items are empty.</EmptyCart>          
         } 
        </CartItems>
        <CustomButton onClick={() => {
            router.navigate('/checkout');                                                                                                  
            dispatch(ToggleCartDropDown());
    }} className='btn-checkOut' value='CHECK OUT'  />
    </CartDropDownContainer> 
 )
}

const mapStateToProps = (state) => {

    return {
        cartItems: selectCartItems(state)
    }
};

export default withRouter(connect(mapStateToProps)(CartDropDown));