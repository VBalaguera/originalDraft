//MONITOR REPLACES DIRECTORY
//MONITOR EQUALS FLAGSHIP
import React from 'react';

import MenuItem from '../menu-item/menu-item.component'; 

import './directory.styles.scss'; 

class Monitor extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'Future News',
                  subtitle: 'test placeholder',
                  imageUrl: 'https://images.unsplash.com/photo-1595548381229-801503e72fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
                  size: 'medium',
                  id: 1,
                  linkUrl: 'future-news'
                },
                {
                  title: 'SXVII',
                  subtitle: 'test placeholder',
                  imageUrl: 'https://images.unsplash.com/photo-1458909760068-5a3e1baf59c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
                  size: 'medium',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'Reviews',
                  subtitle: 'test placeholder',
                  imageUrl: 'https://images.unsplash.com/photo-1549837019-ad6f9df09180?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                  size: 'medium',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Articles',
                  subtitle: 'test placeholder',
                  imageUrl: 'https://images.unsplash.com/photo-1605453170394-53a8cd4c495c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Recommendations',
                  subtitle: 'test placeholder',
                  imageUrl: 'https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ],
              
        }
    }

    render() {
        return (
            <div className='monitor-menu'>
              <div>
                <h1 className='monitor-title'> This is the Monitor </h1>
              </div>
                {
                    this.state.sections.map(({id, ...otherSectionsProps}) => (
                        
                        <MenuItem key={id} {...otherSectionsProps}/>
                    ))
                }
            </div>
        )
    }
}
//we do need to store the state value of the menu items; 

export default Monitor; 

//about imageUrl: it is not enough to just write imageUrl={imageUrl}. See menu-item for more information. size is a prop 