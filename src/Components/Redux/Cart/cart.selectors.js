import { createSelector } from 'reselect';

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartToggle = createSelector(
    [selectCart],
    (cart) => cart.isCartClicked
)

export const selectCartItemsCount  = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem) => accumulator +cartItem.quantity ,0)
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem) => accumulator +cartItem.quantity * cartItem.price ,0)
)