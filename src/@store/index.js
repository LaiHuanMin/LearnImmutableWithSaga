import createSagaIndex from "redux-saga";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "@reducer/index.js";
import sagas from '@saga/index.js'
import {createLogger} from 'redux-logger'

const LoggerMiddleware = createLogger({
    collapsed: true
})
const SagaMiddleware = createSagaIndex();
const store = createStore(combineReducers(reducers),applyMiddleware(SagaMiddleware,LoggerMiddleware));

sagas.map((item,index)=>{
    SagaMiddleware.run(item);
})

export default store;