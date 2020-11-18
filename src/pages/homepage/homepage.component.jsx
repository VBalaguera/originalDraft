//INDEX REPLACES HOMEPAGE
import React from 'react';

import Main from '../../components/main/main.component'; 
import Directory from '../../components/directory/directory.component.jsx';
import Flagship from '../../components/flagship/flagship.component';
import './homepage.styles.scss'; 

const HomePage = () => (
    <div className='index'>
    <Main/>
        <Flagship />
        <Directory />
    </div>
);

export default HomePage; 

//index instead of homepage; this is a FUNCTIONAL component that does not have any STATE on it. 