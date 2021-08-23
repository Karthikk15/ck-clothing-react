import { combineReducers } from 'redux'
import userReducer from './Users/user.reducer'
import cartReducer from './Cart/cart.reducer'


export default combineReducers({
    user: userReducer,
    cart : cartReducer
})