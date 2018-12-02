import {ADD_TO_CART, REMOVE_FROM_CART, GET_ITEMS_FROM_LOCAL_STORAGE} from '../constantce';

const defaultState = {
    items: [],
}

export default (state = defaultState, action) => {
    const {type, payload} = action;
      
    switch (type){
        case ADD_TO_CART:
            localStorage.setItem('cart_items', JSON.stringify([...state.items, payload.data]));
            return {
                ...state,
                items: [...state.items, payload.data]
            };

        case REMOVE_FROM_CART:
        localStorage.setItem('cart_items', JSON.stringify(state.items.filter (item => item._id !== payload)));
        return {
            ...state,
             items: state.items.filter (item => item._id !== payload)
             
        }

        case GET_ITEMS_FROM_LOCAL_STORAGE:
		const itemsFromLocalStorage = JSON.parse(localStorage.getItem('cart_items'));
			if (itemsFromLocalStorage === null){
				return {
					...state,
					items: defaultState.items,
				};
			}
			return {
				...state,
				items: itemsFromLocalStorage,
			};
    }

    return state;
}