import React from 'react'; 

import './breath.styles.scss';


  

const BreathPage = () => (
    <div className='breath'>
        <h1>Breath</h1>

        <div className="container" id="container">
            <div className="circle"></div>

            <p id="text">Breath in</p>

            <div className="pointer-container">
                
            </div>
        </div>
    </div>
); 

export default BreathPage; 