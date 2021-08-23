import React from "react";
import './cart-item.styles.scss';


const CartItem = ({item: {imageUrl, name, quantity, price}}) => {
 return (
 <div className="cartItem-Container">
     <img className='img-item' src={imageUrl} alt="item" />
     <div className="details">
         <span>{name}</span>
         <span> {quantity} x ${price}</span>
     </div>
 </div>
 )
}

export default CartItem