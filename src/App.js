import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import logo from './logo.svg'; //PENDING
import './App.css';


import Header from './components/Header/header.component'; 
import HomePage from './pages/homepage/homepage.component'; 
import Banner from './components/banner/banner.component.jsx'; 
import BreathPage from './pages/breath/breath.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx'; 
import PostsPage from './pages/posts/posts.component.jsx'; 
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import About from './pages/about/about.component';
import Footer from './components/footer/footer.component'; 

import { auth } from './firebase/firebase.utils.js'; 
// (from firebase.utils.js)since we want to store the state of the user, and access the current user object, we need to convert this component into a class component

class App extends React.Component {
  constructor() {
    super(); 

    this.state = {
      currentUser: null
    }
  }

  // firebase 9. to fetch all data in the backend, and it will not do this again until this component gets rendered again; we do not want that. Firebase helps to do that; 

  // firebase 10. onAuthStateChanged() uses: a function where the parameter is what the userState is on the auth on our firebase project with an object where currentUser is the user object

  unsubscribeFromAuth = null

  componentDidMount() {
    // firebase 11. what follows is an open subscription: an open messaging system between the app and firebase; when changes ocurre, related to this app, firebase sends out a message about user updates (sign in or sign out); we do not need to manually fetch changes;

    // firebase 12. however, we also need to unmount this and close the subscription to prevent memory leaks on our app, that is why we set unsubscribeFromAuth
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user); 
      // firebase 13. firebase is now aware of the last user's login, that endpoint is doing good; however, the app hasn't saved the state. If we refresh, it will remaing logged until user signs out; 
    })
  }

  // firebase 14. how to close the subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  } 

  // firebase 15. SIGN OUT IMPLEMENTATION: <Header currentUser={this.state.currentUser}/>

  


  render() {
    return (
      <div>
  
        <Header currentUser={this.state.currentUser}/>
        <Banner/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/breath' component={BreathPage}/>
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

export default App;
