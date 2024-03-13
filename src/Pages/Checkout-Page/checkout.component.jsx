import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../Components/Checkout-Item/checkout-item.component';
import { selectCartTotalPrice, selectCartItems } from '../../Components/Redux/Cart/cart.selectors';
import './checkout.styles.scss'
import StripePayment from '../../Components/Stripe-payment/stripe.component';
const CheckOut = ({cartItems , totalPrice}) => {
    return (
    <div className='checkout-page'>
      <div className="checkout-header">
          <div className="headerBlock">
             <span>Product</span>
          </div>
          <div className="headerBlock">
             <span>Description</span>
          </div>
          <div className="headerBlock">
             <span>Quantity</span>
          </div>
          <div className="headerBlock">
             <span>Price</span>
          </div>
          <div className="headerBlock">
             <span>Remove</span>
          </div>
      </div>
      {
          cartItems.map(item => {
              return <CheckoutItem key = {item.id} item ={item}></CheckoutItem>
          })
      }
      <div className="totalPrice">
          <span>Total: ${totalPrice}</span>
      </div>
      <div className='payment-warning'>
        *Use below card for test payments* 
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <div className='stripe-pay'>
      <StripePayment  price={totalPrice}/>
      </div>
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice : selectCartTotalPrice
})

export default connect(mapStateToProps, null)(CheckOut);