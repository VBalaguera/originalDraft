import React from 'react';

import Monitor from '../../components/monitor/monitor.component';
import Flagship from '../../components/flagship/flagship.component';
import Footer from '../../components/footer/footer.component';

import './index.styles.scss'; 

const Index = () => (
    <div className='index'>
        <Flagship />
        <Monitor />
        <Footer/>
    </div>
);

export default Index; 

//index instead of homepage; this is a FUNCTIONAL component that does not have any STATE on it. 