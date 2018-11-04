import {START,SUCCESS,FAIL} from '../constantce';
import axios from 'axios';

//const UrlByEnv = process.env.NODE_ENV == "development" ? "http://localhost:8080/" : "https://snowstormapi.herokuapp.com/";
const UrlByEnv = "https://snowstormapi.herokuapp.com/";

const axiosInstance = axios.create({
    baseURL: UrlByEnv
})

export default store => next => action => {

    const {type, callApi, typeOfMethod, apiData, ...rest} = action

    // if callApi param's is not exist nothing will happen
    if (!callApi) return next(action);

    // on another case we will use api
    next({
        ...rest, type: type + START
    });

    switch(typeOfMethod){
        case 'get':
            console.log(`делаю GET на эндпоинт ${callApi}`);
            return axiosInstance(callApi)
                .then(res => {
                 //   console.log(`--- ${res.status} RESPONSE FROM BD: ${JSON.stringify(res.data)}`);
                    return res.data;
                })
                .then(responseAPI => next({...rest, type: type + SUCCESS, responseAPI}))
                .catch(error => next({...rest, type: type + FAIL}))

        case 'post':
            console.log(`делаю POST на эндпоинт ${callApi} и отправляю ${JSON.stringify(apiData)}`);
            const postingData = apiData.data;
            return axiosInstance.post(callApi, postingData)
                .then(res => {
                  //  console.log(`--- ${res.status} RESPONSE FROM BD: ${JSON.stringify(res.data)}`);
                    return res.data;
                })
                .then(responseAPI => next({...rest, type: type + SUCCESS, responseAPI}))
                .catch(error => next({...rest, type: type + FAIL}))
    }
}