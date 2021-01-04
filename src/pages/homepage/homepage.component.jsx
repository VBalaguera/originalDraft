import React from 'react';

import Flagship from '../../components/flagship/flagship.component'; 
import Directory from '../../components/directory/directory.component';
import Main from '../../components/main/main.component'; 

import { HomePageContainer } from './homepage.styles'; 

const HomePage = () => (
  <HomePageContainer>
    <Main />
    <Flagship />
    <Directory />
  </HomePageContainer>
);

export default HomePage;
