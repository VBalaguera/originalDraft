import React from "react"; 

import './main.styles.css'; 

const Main = () => (
    <div className="main">
        <div className="main_pitch">
        <div className="main_pitch_text">
            <h1>An urban <span className="pointedWords">reinterpretation</span></h1>
            <p>
                This is a test. Enjoy.
            </p>
        </div>
        <div className="showcase">
            <button className="showcase-tour">Start tour</button>
            <button className="showcase-random">Random page</button>
        </div>
    </div>
    <div className="main_pitch-img">
    </div>
</div>
);

export default Main; 