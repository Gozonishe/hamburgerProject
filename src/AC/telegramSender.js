import {CALL_TELEGRAM} from '../constantce';

export function callTelegram(data){

    console.log(data);
    
    return {
        type: CALL_TELEGRAM,
        callApi: '/telegram',
        typeOfMethod: 'post',
        apiData: {data} 
    }
}