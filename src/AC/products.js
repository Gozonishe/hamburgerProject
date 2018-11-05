import {GET_PRODUCTS,POST_PRODUCTS} from '../constantce';

export function getProducts(){
    return {
        type: GET_PRODUCTS,
        callApi: '/products',
        typeOfMethod: 'get',
    }
}

export function postProducts(data){
    return {
        type: POST_PRODUCTS,
        callApi: '/products',
        typeOfMethod: 'post',
        apiData: data 
    }
}