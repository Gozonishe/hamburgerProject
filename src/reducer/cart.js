import {ADD_TO_CART, REMOVE_FROM_CART} from '../constantce';

const defaultState = {
    items: [],
}

export default (state = defaultState, action) => {
    const {type, payload} = action;
      
    switch (type){
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, payload.data]
            };

        case REMOVE_FROM_CART:

        return {
            ...state,
             items: state.items.filter (item => item._id !== payload)
             
        }
    }

    return state;
}