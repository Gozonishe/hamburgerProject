import {combineReducers} from 'redux';
import counterReducer from './counter';
import productsReducer from './products';
import orderReducer from './order';
import cartReducer from './cart';

export default combineReducers({
    count: counterReducer, 
    myProductsData: productsReducer,
    orders: orderReducer,
    cart: cartReducer,
})