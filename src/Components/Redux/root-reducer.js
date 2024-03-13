import { combineReducers } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import userReducer from './Users/user.reducer'
import cartReducer from './Cart/cart.reducer'
import menuItem_Reducer from './Menu-Items/menu-items.reducer';
import shopReducer from './Shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart : cartReducer,
    homeItems: menuItem_Reducer,
    shopItems: shopReducer
})

export default persistReducer(persistConfig, rootReducer);