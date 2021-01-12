import React from "react"; 

import CustomButton from '../../components/custom-button/custom-button.component'; 

import './main.styles.css'; 
import { MainContainer, 
    MainContainerPitch, 
    MainContainerPitchText,
    MainContainerPitchPointedWords,
    MainContainerShowcase
 } from './main.styles'; 

const Main = () => (
    <MainContainer >
        <MainContainerPitch>
        <MainContainerPitchText>
            <h1>An urban <MainContainerPitchPointedWords>reinterpretation</MainContainerPitchPointedWords></h1>
            <p>
                This is a test. Enjoy.
            </p>
        </MainContainerPitchText>
        <MainContainerShowcase>
            <CustomButton showcase>Start tour</CustomButton>
            <CustomButton showcase>Random page</CustomButton>
        </MainContainerShowcase>
        </MainContainerPitch>
        <div className="main_pitch-img">
        </div>
    </MainContainer>
);

export default Main; 