

1. CREATING THE PROJECT: 

npx create-react-app frugality to create the app. 
yarn add node-sass to bring sass to the table. 

Then: cd frugality to go into the main. We delete everything that is not necessary in index.html, app.js, and app.css.

Basic structure so far: 

App
    Header 
    <Switch> PAGES HERE:
        Index.
        Products. 
        Categories. 
        FAQ.
        SIGN IN/UP. 
        CONTACT. 
    </Switch>
    Footer 

Create the index.component (PAGE): 

import React from 'react';

import './index.styles.scss'; 

const Index = () => (
    <div className='index'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        19th CENTURY
                    </h1>
                    <span className='subtitle'>
                        Browse our wares
                    </span>
                </div>
            </div>
        </div>
    </div>
)

export default Index; 

//index instead of homepage; this is a FUNCTIONAL component that does not have any STATE on it. 

and modify App.js: 

import React from 'react';
import logo from './logo.svg'; //PENDING
import './App.css';

import Index from './pages/index.component'; 

function App() {
  return (
    <div>
      <h1>Test</h1>
      <Index />
    </div>
  );
}

export default App;

