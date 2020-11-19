import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// REDUX 1. 
import { Provider } from 'react-redux';

// REDUX 8. 
import store from './redux/store';

import './index.css';
import App from './App';



// REDUX 2. 
ReactDOM.render(
  // REDUX 8. cont
  <Provider store={store}>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// the PROVIDER is a COMP that is the parent of everything inside the APP. It allows us to get access to everything store-related. 

// REDUX 8. passing the store to index.js: 
/*
before: 
ReactDOM.render(
  <Provider>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
after: 
import store from './redux/store';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


*/


