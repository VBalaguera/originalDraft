import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import logo from './logo.svg'; //PENDING
import './App.css';

import Header from './components/Header/header.component'; 
import Index from './pages/index/index.component'; 
import Banner from './components/banner/banner.component.jsx'; 
import BreathPage from './pages/breath/breath.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx'; 
import PostsPage from './pages/posts/posts.component.jsx'; 
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import About from './pages/about/about.component';
import Footer from './components/footer/footer.component'; 

function App() {
  return (
    <div>
      <Header />
      <Banner/>
      <Switch>
        <Route exact path='/' component={Index}/>
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

export default App;
