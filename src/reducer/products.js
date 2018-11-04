import {GET_PRODUCTS, SUCCESS} from '../constantce';

const defaultState = {
    count: 0,
    products:[]
}

export default (state = defaultState, action) => {
    const {type, responseAPI} = action;
    switch (type){
        case GET_PRODUCTS + SUCCESS:
            return {
                ...state,
                count: responseAPI.count,
                products: responseAPI.products
            }
    }

    return state;
}