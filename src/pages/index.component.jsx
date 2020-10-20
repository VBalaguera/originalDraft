import React from 'react';

import './index.styles.scss'; 

const Index = () => (
    <div className='index'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        19th CENTURY
                    </h1>
                    <span className='subtitle'>
                        Browse our wares
                    </span>
                </div>
            </div>
        </div>
    </div>
)

export default Index; 

//index instead of homepage; this is a FUNCTIONAL component that does not have any STATE on it. 