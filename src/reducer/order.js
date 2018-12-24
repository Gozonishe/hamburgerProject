import {GET_ORDER, SUCCESS, SET_CONTACT} from '../constantce';

const defaultState = {
    count: 0,
    orders:[],
    contacts:''
}

export default (state = defaultState, action) => {
    const {type, responseAPI, payload} = action;
    switch (type){
        case GET_ORDER + SUCCESS:
            return {
                ...state,
                count: responseAPI.count,
                orders: responseAPI.orders
            }
        case SET_CONTACT:
            return {
                ...state,
                contacts: payload
            }
    }

    return state;
}