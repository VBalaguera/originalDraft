import React from 'react';

import StripeCheckout from 'react-stripe-checkout'; 

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_51I3kizBxDFBqxUrVHC36beUjt8gby9anpxHgkSKgqgTv9ArkbaNM1BgzyZrSiaCbqIwNqGYT9s3jE7b402vsShSz00icgq5ZFv'; 

    const onToken = token => {
        console.log(token); 
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='frugality app'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da' 
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;