import { createStore, applyMiddleware } from 'redux'
import reducer from './root-reducer';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

const middlewares = [logger, thunk];

export const store = createStore(reducer, applyMiddleware(...middlewares)); 
export const persistor = persistStore(store);