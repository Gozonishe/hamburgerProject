import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducer';
import api from '../middlewares/api';

const enchancer = applyMiddleware(api, thunk, logger );
const store = createStore(reducer, {}, enchancer );


export default store;