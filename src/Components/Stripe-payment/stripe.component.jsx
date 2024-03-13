import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripePayment =({price}) => {
 const priceForStripe = price * 100;
 const publishKey = 'pk_test_51JrAsjSCZJCWIbJzUow5sa8Y6GQ9DbJF3KLFaF17bRwc66kuzGxr5hvKL94NIkzlAiJTC1odId6XQHOSzwc8Ski300WdDUxMxo';
 
 const onToken = () => {
     alert('Payment done successfully!');
 }
 
 return (
     <StripeCheckout 
     label='Pay Now'
     name='CK Clothing Ltd.'
     billingAddress
     shippingAddress
     image='https://svgshare.com/i/CUz.svg'
     description={`Your total is $${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishKey}
     />
 )
}

export default StripePayment;