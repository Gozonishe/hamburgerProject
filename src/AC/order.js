import {GET_ORDER} from '../constantce';

export function getOrder(){
    return {
        type: GET_ORDER,
        callApi: '/orders',
        typeOfMethod: 'get',
    }
}