import React from 'react';
import styled from 'styled-components'; 
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css'; 



import HomePage from './pages/homepage/homepage.component';
import PostsPage from './pages/posts/posts.component'; 
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Contact from './pages/contact/contact.component'; 
import About from './pages/about/about.component';
import Footer from './components/footer/footer.component'; 

import Header from './components/Header/header.component.jsx';
import Banner from './components/banner/banner.component.jsx'; 

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const Text = styled.div`
  color: red; 
  font-size: 28px; 
  text-align: center; 
  margin: .5rem; 
  font-weight: bold; 
  border: ${({isActive}) => isActive ? '1px solid black' : '3px dotted green'}; 
`; 
//this is styled.html element we want
//since this is a string, we have to interpolate; 
// interpolation: here we destructure props, isActive, and say that if isActive is true, we will want a 1px solid black border; if it is false, a 3px dotted green border

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
          <Header />
          <Text isActive={true}
          >Styled components test here</Text>
          <Banner />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/posts' component={PostsPage}/>
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route
              exact
              path='/signin'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
          
          <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
