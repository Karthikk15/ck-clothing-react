import React from 'react';
import './checkout-item.styles.scss';
import { RemoveItem, AddItem, RemoveSpecificItem } from '../Redux/Cart/cart.actions';
import { connect } from 'react-redux';
const CheckoutItem = ({ item, removeItem, addItem, removeCurrentItem }) => {
   const {imageUrl, name, quantity, price} = item;
   return ( <div className='checkout-item'>
      <div className="imgContainer">
         <img src={imageUrl} alt="item" />
      </div>
      <span>{name}</span>
      <div className="qtnContainer">
         <div onClick={() => { removeCurrentItem(item) }} className="arrow">&#10094;</div>
         <span>{quantity}</span>
         <div onClick={() => addItem(item)} className="arrow">&#10095;</div>
      </div>
      <span>${price}</span>
      <div className="removeBtn" onClick={() => removeItem(item)}>&#10005;</div>
   </div>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
       removeItem : (item) => {
         dispatch(RemoveItem(item));
       },
       addItem: (item) => {
          dispatch(AddItem(item));
       },
       removeCurrentItem: (item) => {
          dispatch(RemoveSpecificItem(item));
       }
   }
 }

export default connect(null, mapDispatchToProps)(CheckoutItem);