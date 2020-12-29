import React from 'react';

import Flagship from '../../components/flagship/flagship.component'; 
import Directory from '../../components/directory/directory.component';
import Main from '../../components/main/main.component'; 
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Main />
    <Flagship />
    <Directory />
  </div>
);

export default HomePage;
