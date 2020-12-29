import React from 'react';

import Directory from '../../components/directory/directory.component';
import Main from '../../components/main/main.component'; 
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Main />
    <Directory />
  </div>
);

export default HomePage;
