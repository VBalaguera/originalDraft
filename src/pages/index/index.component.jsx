//INDEX REPLACES HOMEPAGE
import React from 'react';

import Monitor from '../../components/monitor/monitor.component';
import Flagship from '../../components/flagship/flagship.component';
import './index.styles.scss'; 

const Index = () => (
    <div className='index'>
        <Flagship />
        <Monitor />
    </div>
);

export default Index; 

//index instead of homepage; this is a FUNCTIONAL component that does not have any STATE on it. 