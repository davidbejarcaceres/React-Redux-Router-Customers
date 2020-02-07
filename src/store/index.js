import { createStore, compose, applyMiddleware } from "redux"
import promiseMiddleware from 'redux-promise';
import reducers from "../reducers"
import createSagaMiddleware from 'redux-saga'

import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(reducers, {},
    composeEnhancers(applyMiddleware(sagaMiddleware)));

// then run the saga
sagaMiddleware.run(mySaga)