import React from "react"; 

import './main.styles.css'; 

const Main = () => (
    <div class="main">
        <div class="main_pitch">
        <div class="main_pitch_text">
            <h1>An urban <span class="pointedWords">reinterpretation</span></h1>
            <p>
                This is all I got to share and say about Madrid at this moment. Enjoy.
            </p>
        </div>
        <div class="showcase">
            <button class="showcase-tour">Start tour</button>
            <button class="showcase-random">Random page</button>
        </div>
    </div>
    <div class="main_pitch-img">
    </div>
</div>
);

export default Main; 