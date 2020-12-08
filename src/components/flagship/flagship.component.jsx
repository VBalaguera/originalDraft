//FLAGSHIP EQUALS DIRECTORY

import React from 'react';
import { connect } from 'react-redux'; 

import { createStructuredSelector } from 'reselect'; 
import { selectFlagshipContents } from '../../redux/flagship/flagship.selectors'; 

import FlagshipContent from '../flagship-content/flagship-content.component'; 

import './flagship.styles.scss'; 

const Flagship = ({ contents }) => (

            <div className='flagship'>
              <div>
                <h1 className='flagship-title'> This is the Flagship </h1>
              </div>

                {
                    contents.map(({id, ...otherContentsProps}) => (
                        <FlagshipContent key={id} {...otherContentsProps}/>
                    ))
                }
        </div>
); 

const mapStateToProps = createStructuredSelector({
  contents: selectFlagshipContents
})

export default connect(mapStateToProps)(Flagship); 

/* PARENT COMPONENT OF FLAGSHIP-CONTENT 

const Flagship = ({frugality}) => (
    <div className='flagship'>
        <h1>
            {frugality}
        </h1>
    </div>
); 

*/