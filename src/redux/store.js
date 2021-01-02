import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

//remember: inside Node there is the env variable. Create React App creates an env variable, only accessible through process.env; NODE_ENV is a prop that will be development, production, or test. 

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

//when we call yarn build, it switches that node variable to production; while using yarn start, it switches it to development; 

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistStore };
