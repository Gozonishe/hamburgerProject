import {GET_ORDER, ADD_TO_CART, REMOVE_FROM_CART} from '../constantce';

export function getOrder(){
    return {
        type: GET_ORDER,
        callApi: '/orders',
        typeOfMethod: 'get',
    }
}

export function addToCart(data) {
    return {
        type: ADD_TO_CART,
        payload: {data},
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    }
}
