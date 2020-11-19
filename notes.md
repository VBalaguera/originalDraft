

1. CREATING THE PROJECT: 

npx create-react-app frugality to create the app. 
yarn add node-sass to bring sass to the table. 

Then: cd frugality to go into the main. We delete everything that is not necessary in index.html, app.js, and app.css.

Basic structure so far: 

App
    Header 
    <Switch> PAGES HERE:
        Index.
            Products by categories. //placeholder for future project 
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

COMMIT: git add SSH, git status to check out changes, git add -A to add all changed files, then git commit -m 'message'. FINAL: git push origin main plus passphrase. 

created menu-item.component.jsx. Created monitor folder, component and such instead of directory. MONITOR REPLACES DIRECTORY. 

CREATED FLAGSHIP (CLASS) Y FLAGSHIP CONTENT (FUNCT).  STYLING BOTH. 
CREATED ABOUT (CLASS) AND ABOUT-CONTENT (FUNCT). PENDING STYLING. 
PENDING CREATE LOGO. 


/MODULE 5: ROUTING IN REACT; 

Adding Router: yarn add react-router-dom 

on index.js: 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

to this: 

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>,
  document.getElementById('root')
);


then, in App.js: 

import React from 'react';
import logo from './logo.svg'; //PENDING
import './App.css';

import Index from './pages/index/index.component'; 

function App() {
  return (
    <div>
      <h1 className='title'>FRUGALITY</h1>
      <Index />
    </div>
  );
}

export default App;

to this: 

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

// every path without exact will lead only till the end of the matching url. We can type an exact path with gibberish, but if it contains a matched path, it will redirect there. Example: if route exact path:'/index' and we type /index/gibberish, we will go to '/index'. We can build nested routes with match. 

Remember the isExact value when routing more complex paths. Url parameters are: '/topics/:topicId' anything after topics/ can be a dynamically changing value that we can access as A PARAMETER. From location param, only pathname matters: where we're currently. Useful.  

Let's inspect App.js from this lesson: 

import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

const HomePage = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push('/topics')}>Topics </button> //this is like Link, but more dynamically functional. Is not rendering again, is functional calling. 
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = props => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1> //this is nested routing; what follows `{} is a direct path. Anything before props.match.url can change, but it does not affect these nesting/components. 
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
    </div> //this will be redirected
  );
};

const TopicDetail = props => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div> //this is a way to redirect from other sources the content that we want to populate the page with 
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/blog/asdqw/topics' component={TopicsList} />
      <Route path='/blog/asdqw/topics/:topicId' component={TopicDetail} />
      <Route exact path='/blog/topics' component={TopicsList} />
      <Route path='/blog/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;

withRouter(): 

history is a prop that we need to insert into index.component: 

const Index = ({history}) => (
    <div className='index'>
        <Flagship />
        <Monitor />
        <About />
        <Footer/>
    </div>
);

we could pass history through, for example, <Monitor history={history}/> so we can use it in its children history={this.props.history}; This works, giving access to the children of Monitor. But this is a bad practice called prop drilling. Directly passing props through children that do not need them is a waste. There is a solution. On menu-item: 

add this: import { withRouter } from 'react-router-dom'; //Just like this menu-item is a function that takes props and renders out a comp, a higher order component (a function that takes a comp as an arg and returns a modified comp). Is a function that gives you back a powdered component. Here, we are powering up menu-item comp to have access to the Router. 

replace this: export default MenuItem; 
with this: export default withRouter(MenuItem); //Router returns back a powdered menu-item comp with access to those location, match, and history props that we need to access to. 

then, we add history to the props in MenuItem, and modify this:     <div className={`${size} menu-item`}> into this: 


Since we do not know where we could be in the site, as in the url, we need match too. 

(remember that in monitor we have the value linkUrl), we need to pass it to the MenuItem in Monitor, but we need to avoid pilling up props, so we modify this: 
this.state.sections.map(({title, subtitle, imageUrl, id, size}) => (
    
    <MenuItem key={id} title={title} subtitle={subtitle} imageUrl={imageUrl} size={size}/>
))
into this: 
this.state.sections.map(({id, ...otherSectionsProps}) => (
    
    <MenuItem key={id} {...otherSectionsProps}/>
))
we need id for key. This is spreading props. 

CREATING SHOP, COLLECTION PREVIEW, COLLECTIONITEM.
ALSO: POSTS, CATEGORIES, AND CATEGORIESITEMS.

shop.component.jsx: 

import React from 'react';

import './shop.data.js'; 

import SHOP_DATA from './shop.styles.scss';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>Shop Page</div>
        );
    }
}

export default ShopPage; 

We are going to MOVE ALL THE STATE TO ANOTHER, SEPARATED FILE: shop.data.js. 

Once we have this, collection-preview: 

import React from 'react';

import './collection-preview.styles..scss';

const CollectionPreview = ({title, items}) => ( //state from ShopPage

    <div className='collection-preview'> 

        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(item => ( //mapping again all the state
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview; 

so, in shop.component we had this: 
    render() {
        return (
            <div>Shop Page</div>
        );
    }
and now we must have this: 
    render() {
        const {collections} = this.state; //state in this component 
        return (<div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => ( //spreading props and using id again
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }

We need to modify the data so it only displays four items per category:
            {
                items.filter((item, idx) =>idx < 4)
                    .map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }

Every time we have a chain of modifications it will render again if the component gets rendered again. 

So, to recap: we created a PAGE and FUNCT comp called SHOP/POSTS: 

import React from 'react';

import './posts.styles.scss'; 

import Categories from '../../components/categories/categories.component'; 

//using SHOP_DATA as a temp placeholder: 
import SHOP_DATA from '../shop/shop.data.js';

class PostsPage extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            collections: SHOP_DATA //temporary placeholder
        };
    }

    render() {
        const {collections} = this.state; 
        return(
            
            <div className='posts'>
                <div className='identifier'>
                    POSTS
                </div>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <Categories key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
};

export default PostsPage; 

These PAGES passes the state as props to  CollectionPreview/Categories: 

import React from 'react';

import './categories.styles.scss';

const Categories = ({title, items}) => (
    <div className='categories'>
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <div className='categories-items'>
            {
                items.filter((item, idx) => idx < 4)
                .map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
);

export default Categories; 

Now: creating COLLECTION-ITEM and CATEGORIES-ITEM.

Created BANNER. 

NOTES ABOUT FILE NAMES: 
//FLAGSHIP EQUALS DIRECTORY/MONITOR 
//FLAGSHIP CONTENT EQUALS MENU ITEM

//MONITOR REPLACES DIRECTORY
//MONITOR EQUALS FLAGSHIP

//INDEX REPLACES HOMEPAGE

//POSTS EQUALS SHOP

//CATEGORIES EQUALS COLLECTION PREVIEW

//CATEGORIES ITEM EQUALS COLLECTION ITEM

//SIGN IN AND SIGN UP PAGE 
//FORM INPUT COMPONENT 

//CUSTOM BUTTON COMP 

//deep dive into differences between funct and class comps 



//MODULE 7: WE'RE GOING TO FIREBASE, BABY

We are going to use Firebase to store information. 
yarn add firebase 





// MODULE 8: REDUX ENCORE 

/* // REDUX 0.

REMEMBER THE BASICS OF REACT:

DECIDE ON COMPONENTES.

DECIDE THE STATE AND WHERE IT LIVES.

WHAT CHANGES WHEN STATE CHANGES. 

While REACT has a tree-like structure for its components. Redux aggregates all State into one MASSIVE OBJECT called STORE. With it, none of the comps need to store state anymore. Any updates go through the state, and it is passed to the component. Redux works with multiple frameworks like Meteor or Angular. It is inspired from event sourcing or cqrs. 

REASONS TO USE REDUX: managing large state, sharing data between components, and it has predictable state management using the three principles: 

1. SINGLE SOURCE OF TRUTH: one massive state obj in the App. 
2. STATE IS READ ONLY: not modifying it. After each action is taken, we create A NEW STATE. 
3. CHANGES USING PURE FUNCTIONS: which receive an input, and always give back the same, predictable output. 

REDUX FLOW: 

ACTIONS: what the user does. 

ROOT REDUCER: a pure function that receives the user input and creates an output, which is the state or STORE. 

STORE: the entire state of the app. 

DOM CHANGES: through React, we do changes to the DOM. 

Why like this? Redux streamlines all the ACTIONS into the REDUCER, which modifies the STORE, which then do all the DOM CHANGES. 

FLUX PATTERN: semi-offtopic, this was the process of having an ACTION, then a DISPATCHER takes it to the STORE, which updates the VIEW. 

Redux is similar to this.state in React. We could technically have stage management on Redux while having certain elements with this.state through React. 

REDUX IN OUR APP. We need to understand why we need Redux to solve potential problems. Problems such: DRILLING PROPS, the necessity and bad practice of passing props down from components into their children, because many components in between do not need that prop. The bigger and more complex the tree-like structure of comps in React gets, the more difficcult is to pass the state without reducing efficiency and performance. 

But what if we take the state, and the code that gives currentUser data to be store in App.js, and move it into the component that needs it directly? It duplicates currentUser state, and it may be reused for nothing. Also, code duplication, potential mismatching of the state between components, and bad efficiency. With unidirectional data flow we can have the state as the single source of truth. That is one of many reasons why we're using Redux now. SINGLE SOURCE OF TRUTH. 

UNDERSTANDING REDUX FLOW: 
COMPONENTS in the APP fire ACTIONS (any user interactions). Those ACTIONS update the STATE through REDUCERS (a single slice/piece of state easily accessible for any component). Then, the ROOT REDUCER (big state object) pass it as props to the COMPONENTS as props. One object/place has all the state, and we retain the unidirectional data flow. 

ABOUT ACTIONS AND REDUCERS:
REDUCERS are vital, they represent the STATE. They are minor OBJs. The ROOT REDUCER STORES all of them in a huge OBJs. The REDUCERS classify the type of ACTIONS available in the APP, like filters or brands, and combined they are the ROOT REDUCER.

{
  home: {...},  //this represents the home REDUCER
  shop: {...},  //this represents the shop REDUCER
  user: {...}   //this represents the user REDUCER
}
And they all pass state as props to the COMPONENTS, which trigger ACTIONS such as: example trigger action => SET_CURRENT_USER. 

ACTIONS are OBJs with a TYPE, STRING VALUE, and a PAYLOAD: 
{
  type: string,
  payload: any
}
This example ACTION updates its respective EXAMPLE REDUCER WITH THE PAYLOAD and will filter if the ACTION IS APPLICABLE. EVERY REDUCER CARES ABOUT THE RESPECTIVE TYPE ACTIONS: 

User Reducer 
{
  currentUser: {...}
}

Since it is its correspondent type of ACTION, the REDUCER pass currentUser as prop. Thus, the unidirectional flow continues. Example of REDUCER GRAMMAR: 

const userReducer = (currentState, action) => { //the STATE is the STATE BEFORE THE ACTION
  switch (action.type) {  //this checks out the action type, if matches
    case 'SET_CURRENT_USER':
      return {    //it returns a new OBJ, spreading it 
        ...currentState, 
        currentUser: action.payload //and the PROP of tbat OBJ is the PAYLOAD 
      };
      default: 
        return currentState; // WE RETURN A NEW OBJECT BECAUSE WE WANT RENDERING AGAIN COMPS, since REACT only renders again if the COMPS are different. If PROPS are the same, they remain the same. 
  }
}; 

REDUCERS ARE LISTENING TO EVERY ACTIONS, yet they only care about their respective action types. 


ABOUT MIDDLEWARE: 
Remember REDUX FLOW: ACTION, ROOT REDUCER, STORE, DOM CHANGES. MIDDLEWARE is between ACTION and ROOT REDUCER. They are a piece of code that gets the action before the ROOT REDUCER. 

INSTALLING REDUX: yarn add redux redux-logger react-redux 

*/

// REDUX 1. on index.js: 
import { Provider } from 'react-redux';

// REDUX 2. same 
before: 
ReactDOM.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>,
  document.getElementById('root')
);
after: 
ReactDOM.render(
  <Provider>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// the PROVIDER is a COMP that is the parent of everything inside the APP. It allows us to get access to everything store-related. 

// REDUX 3. CREATING THE REDUX FOLDER INSIDE SRC 

// REDUX 4. root-reducer.js creation: 
// we are breaking the code into its individual sections for management and practical reasons. 

// REDUX 5. creating user.reducer.js into USER FOLDER IN REDUX FOLDER and writing some code in it; 
// a REDUCER is a funct that gets two props: a STATE object (last state or initial state), and the ACTION. 

const INITIAL_STATE = {
    // AN OBJECT THAT REPRESENTS THE INITIAL STATE OF THIS REDUCER, like instanciating the initial value of state in App.js:
    currentUser: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    //the STATE is something the STORE passes it to the REDUCER when an ACTION occurs. The STATE will be on its current STATE when the ACTION occurs. Thus, the first time we fire the STATE for the first time it will be nothing. THAT IS WHY WE NEED INITIAL_STATE
    // we are using state = INITIAL_STATE as the DEFAULT PARAMETER, AND IS AN ES6 feature for functions. Meaning, if STATE is undefined, it will reach the INITIAL value we passed it. 
    // now we have to figure out how to return the STATE conditioned by the ACTION. Thus, the SWITCH
    //if/else are also valid

    switch (action.type) { 
        //action.type is a STRING
        case 'SET_CURRENT_USER': 
        //if the action matches this type: 
            return {
               ...state, 
               //we spread the values of the STATE because we only want to modify specific ones, not all of them 
                currentUser: action.payload 
                //this is the value we want to modify
            }
        default: 
        //if none of the ACTION types match, we want to return the STATE as it is. 
            return state;
    }
}

export default userReducer; 

// REDUX 6. on root-reducer, we bring in user.reducer, but first: 
import { combineReducers } from 'redux'; 

import userReducer from './user/user.reducer'; 

//this will export out the result of combineReducers as the default value: 
export default combineReducers({ 
    //this is an OBJECT where the KEY goes to the actual reducer that we want
    user: userReducer // user is the KEY that represents a specific slice/piece of the STATE (i.e. REDUCERS)

}); 
// REMEMBER: all the state in REDUX is just a huge JSON OBJECT; 

// WE CREATED A REDUCER, but now we need to bring it into the STORE and INSTANCIATING THE STORE. HOW TO: 

// REDUX 7. CREATING THE STORE: store.js inside the REDUX folder 
import { createStore, applyMiddleware } from 'redux'; 
// WE NEED TO ADD MIDDLEWARE (WHICH GOES BETWEEN THE ACTIONS AND THE ROOTREDUCER) TO THE STORE SO WE CAN CATCH and DISPLAY (CONSOLE.LOG) ACTIONS WHEN THEY'RE FIRED OR DISPATCHED. 

import logger from 'redux-logger'; //this also helps on debugging; 

import root-reducer from './root-reducer'; 

// setting MIDDLEWARES, REDUX expects arrays: 
const middlewares = [logger]; 

// making the STORE 
const store = createStore(rootReducer, applyMiddleware(...middlewares));
// with ...middlewares we are spreading all the methods or values in that array into applyMiddleware() as individual arguments. If we need to add more things to the MIDDLEWARE, we can do it through middlewares array; 

export default store; 

// REDUX 8. 
import store from './redux/store';
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

// REDUX 9. creating user.actions.js inside USER folder in REDUX folder;

// JUST A FUNCT THAT RETURNS AN OBJ. each OBJECT is in the correct format that the ACTION expects it to be: 
export const setCurrentUser = user => ({
    // user OBJ here is the parameter for this FUNCTION, regardless of what is user: could be userAuth, userSnapshot OBJ, null, etc.  

    type: 'SET_CURRENT_USER',
    // that is the same STRING the user REDUCER is expecting 
    // ALWAYS WRITE THEM WITH CAPS AND SNAKE CASE, we do not want to change them 

    payload: user 
    // we are setting the user as the PAYLOAD 
}); 

// REDUX NEEDS A DEEPER LEVEL OF UNDERSTANDING BECAUSE IT IS OPINIONATED. Use it carefully. 

// REDUX 10. HOW DO WE MAKE THE HEADER RECEIVE THE STATE FROM THE REDUCER? 
import { connect } from 'react-redux'; 
//a high order comp to have access to everything redux related 

// REDUX 10. cont on header: 

const mapStateToProps = state => ({
    // state is root-reducer 
    // prop's name will be the actual prop we want to pass in 
    currentUser: state.user.currentUser 
    // we want the root-reducer, the user value (with userReducer), and from there currentUser value 

})

/*
before: export default Header; 
after: */
export default connect(mapStateToProps)(Header);
// connect() uses two functions:
// a FUNCTION to access the ROOT REDUCER: mapStateToProps(); 
// the second is optional, and give back a higher comp to pass to the header


// REDUX 11. 

// REDUX 13. THE CART 


// REDUX 12. USER REDIRECT AND USER ACTION TYPE; 
HOW TO MAKE THE SIGN IN

// ADDITIONAL INFO: 
https://www.npmjs.com/package/react-redux
https://www.npmjs.com/package/redux
https://www.npmjs.com/package/redux-logger



// LEARN ABOUT: STRING INTERPOLATION, BOX-SIZING, no sequel database, REACT COMPONENT STRUCTURE, REDUCER GRAMMAR AND EXAMPLES, ACTION GRAMMAR AND EXAMPLES, PAYLOADS IN REDUX, MIDDLEWARE, WHAD DOES EXACTLY MEAN INSTANCIATING IN REACT/REDUX/WHATEVER, 