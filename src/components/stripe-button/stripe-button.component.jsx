import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HVGMHJTX3BiOzIvfPaHYmzuvkSIqw4XPSJC5VyU8M6AA2hWbb8bvPS1rkWfN2PzDuJiNF759lw6hnty8UhtOZzs00SWPfZ0JN';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='React Store Ltd.'
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