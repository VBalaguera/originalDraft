

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

