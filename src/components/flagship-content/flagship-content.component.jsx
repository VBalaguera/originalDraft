//FLAGSHIP CONTENT EQUALS MENU ITEM
import React from 'react';
import { withRouter } from 'react-router-dom';

import './flagship-content.styles.scss';
import { FlagshipContentTextContainer, FlagshipContentTextContainerTitle, FlagshipContentTextContainerSubtitle } from './flagship-content.styles'; 

const FlagshipContent = ({ secTitle, secSubtitle, imageUrl, size, history, linkUrl, match }) => (
            <div
        className={`${size} flagship-content`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
        <div className='background-image' 
                style={{
            backgroundImage: `url(${imageUrl})`
        }}
            />
            <FlagshipContentTextContainer>
                <FlagshipContentTextContainerTitle>
                    {secTitle.toUpperCase()}
                </FlagshipContentTextContainerTitle>
                <FlagshipContentTextContainerSubtitle>
                    {secSubtitle}
                </FlagshipContentTextContainerSubtitle>
            </FlagshipContentTextContainer>
        </div>
)

export default withRouter(FlagshipContent);