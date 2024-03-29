import { createStore, applyMiddleware } from 'redux'
import reducer from './root-reducer';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

const middlewares = [logger];

export const store = createStore(reducer, applyMiddleware(...middlewares)); 
export const persistor = persistStore(store);