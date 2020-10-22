import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import logo from './logo.svg'; //PENDING
import './App.css';

import Index from './pages/index/index.component'; 
import About from './pages/about/about.component';

function App() {
  return (
    <div>
      <h1 className='title'>FRUGALITY</h1>
      <Switch>
        <Route exact path='/' component={Index}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
