import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// we need to bring here persist and the comp that will leverage inside our app that will give the context of our new persistReducer; 
import { PersistGate } from 'redux-persist/integration/react';
//this can be used for multiple platforms too 


import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

//in persistor={persistor}, {persistor} is export const persistor = persistStore(store) from store.js 
// we want to access the persistor flow, so we need to make sure to wrap the app; it will allow PersistGate to receive the Store, and also do actions that will rehydrate the State when our app refreshes; if we refresh after putting some items in the cart/reading, we will see the persist.REHYDRATE action in the console; which is great; 