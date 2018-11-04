import {GET_ORDER, SUCCESS} from '../constantce';

const defaultState = {
    count: 0,
    orders:[]
}

export default (state = defaultState, action) => {
    const {type, responseAPI} = action;
    switch (type){
        case GET_ORDER + SUCCESS:
            return {
                ...state,
                count: responseAPI.count,
                orders: responseAPI.orders
            }
    }

    return state;
}