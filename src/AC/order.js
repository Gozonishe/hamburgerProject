import {GET_ORDER, ADD_TO_CART, REMOVE_FROM_CART, GET_ITEMS_FROM_LOCAL_STORAGE, SET_CONTACT} from '../constantce';

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
export function setContact(contact) {
    return {
        type: SET_CONTACT,
        payload: contact,
    }
}

export function getItemsFromLocalStorage() {
	return {
		type: GET_ITEMS_FROM_LOCAL_STORAGE,
	}
}

