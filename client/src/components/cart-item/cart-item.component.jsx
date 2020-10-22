import React from 'react';
import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer
} from './cart-item.styles.jsx';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='cart item' />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;