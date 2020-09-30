import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
    CartIconContainer,
    ShoppingIcon,
    ItemCountContainer
} from './cart-icon.styles.jsx';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
    itemCount:  selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);