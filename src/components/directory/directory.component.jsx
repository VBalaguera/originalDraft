//DIRECTORY EQUALS FLAGSHIP
import React from 'react';
import { connect } from 'react-redux'; 
// MODULE 10. VII: 
import { createStructuredSelector } from 'reselect'; 
import { selectDirectorySections } from '../../redux/directory/directory.selectors'; 

import MenuItem from '../menu-item/menu-item.component'; 

import './directory.styles.scss'; 

const Directory = ({ sections }) => (
            <div className='directory-menu'>
              <div>
                <h1 className='directory-title'> This is the Directory </h1>
              </div>
                {
                    sections.map(({id, ...otherSectionsProps}) => (
                        
                        <MenuItem key={id} {...otherSectionsProps}/>
                    ))
                }
            </div>
); 

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory); 
