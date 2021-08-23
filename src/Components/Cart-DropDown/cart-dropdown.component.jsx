import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-Button/custom-button.component';
import CartItem from '../Cart-Item/cart-item.component';
import { withRouter } from 'react-router';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../Redux/Cart/cart.selectors';
import { ToggleCartDropDown } from '../Redux/Cart/cart.actions';
const CartDropDown = ({cartItems, history, dispatch}) => {
 return (
 <div className="cart-dropDown-container">
        <div className="cart-items">
         {
             cartItems.length ?
             cartItems.map((item) => {
                return <CartItem key = {item.id} item = {item} />
             }) : <span className='empty-cart'>Your cart Items are empty.</span>          
         }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(ToggleCartDropDown());
    }} className='btn-checkOut' value='CHECK OUT'  />
    </div> 
 )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
};

export default withRouter(connect(mapStateToProps)(CartDropDown));