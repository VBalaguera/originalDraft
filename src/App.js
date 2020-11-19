import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
// REDUX 11. 
import { connect } from 'react-redux'; 

import logo from './logo.svg'; //PENDING
import './App.css';


import Header from './components/Header/header.component'; 
import HomePage from './pages/homepage/homepage.component'; 
import Banner from './components/banner/banner.component.jsx'; 
import ShopPage from './pages/shop/shop.component.jsx'; 
import PostsPage from './pages/posts/posts.component.jsx'; 
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import About from './pages/about/about.component';
import Footer from './components/footer/footer.component'; 

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'; 


// REDUX 11. cont: 
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {




  unsubscribeFromAuth = null; 

  componentDidMount() {
    const {setCurrentUser} = this.props; 


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });

        });

      } else { 
        setCurrentUser(userAuth); 
      }
    }); 


  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  } 


  


  render() {
    return (
      <div>
  
        <Header/>
        <Banner/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/posts' component={PostsPage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/about' component={About}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

// REDUX 11. III:  

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  // setCurrentUser gets the user OBJECT and then calls dispatch 
  // dispatch is a way of Redux to know that whatever passes on will be an action OBJECT that we will pass to EVERY REDUCER; 
  // the user ACTION is a FUNCTION that gets the user and returns an ACTION OBJ
  // here, we are calling the ACTION OBJ; we are calling setCurrentUser with the user that will be used as the PAYLOAD
  // THIS RETURNS THE OBJECT, so we are just dispatching the OBJECT 
})
/*
before: export default App;
after: */
export default connect(null, mapDispatchToProps)(App);
// null because we do not need any state 

// REDUX 10. III. on App.js: 
/*
before: <Header currentUser={this.state.currentUser}/>
after: <Header/>
*/

// REDUX 10. IV: 
/*
before we needed the constructor, 
  constructor() {
    super(); 

    this.state = {
      currentUser: null
    }
  }
  but not anymore. We delete it; 

  Also, we are replace setState code with the setCurrentUser ACTION code: 
  before:  
  this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
            
          }

  after: 
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
                  // now, we are going to pass that OBJECT with the SNAPSHOT whenever the SNAPSHOT comes in, but we want to set the currentUser value to it 
          // since we're going to do it after else, we destructure this out of our props 

    componentDidMount() {
    const {setCurrentUser} = this.props; 

    then: 
    this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
    changes to: 
              setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
    and this: 
    this.setState({
          currentUser: userAuth
        }); 
    changes to: 
    setCurrentUser(userAuth); 
        // we pass only userAuth, because this is an update 

Now in the console we can see different actions from the LOGGER we imported. They have three basic par: prev state (before action), action, and next state (result).  
*/ 

