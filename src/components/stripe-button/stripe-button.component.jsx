import React from 'react';

import StripeCheckout from 'react-stripe-checkout'; 

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    // about the price; stripe wants the price in USD, that includes cents; so: 
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_51I3kizBxDFBqxUrVHC36beUjt8gby9anpxHgkSKgqgTv9ArkbaNM1BgzyZrSiaCbqIwNqGYT9s3jE7b402vsShSz00icgq5ZFv'; 

    const onToken = token => {
        console.log(token); 
        //we pass this to the backend, which processes the charge 
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            //takes different features that we have access with Stripe (currency, email, componentclass, alipay for Chinece payments, bitcoin, allowRememberMe, and so on!)
            //docs available here: https://github.com/azmenak/react-stripe-checkout 

            label='Pay Now'
            name='frugality app'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da' //PLACEHOLDER 
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            //token is an unsuccess callback that triggers when it submits; the submission is handled by this component; 
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;