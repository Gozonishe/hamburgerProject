import {combineReducers} from 'redux';
import counterReducer from './counter';
import productsReducer from './products';
import orderReducer from './order';

export default combineReducers({
    count: counterReducer, 
    myProductsData: productsReducer,
    orders: orderReducer,
})