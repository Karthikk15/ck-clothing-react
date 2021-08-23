import { RemoveSpecificItem } from "./cart.actions";
import CartActions from "./cart.types"
import updateCartItem from "./cart.utils";
import {removeSpecificItem} from "./cart.utils";
const INITIAL_STATE = {
    isCartClicked : false,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActions.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                  isCartClicked : !state.isCartClicked
            }
        case CartActions.ADD_ITEM: 
             return {
                 ...state,
                 cartItems : updateCartItem(state.cartItems, action.payload)
             }
        case CartActions.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActions.REMOVE_SPECIFIC_ITEM:
            return {
                ...state,
                cartItems: removeSpecificItem(state.cartItems, action.payload)
            } ;
        default:
            return state;
    }
};

export default cartReducer;