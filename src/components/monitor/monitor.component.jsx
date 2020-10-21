//MONITOR REPLACES DIRECTORY 
import React from 'react';

import MenuItem from '../../components/menu-item/menu-item.component'; 

import './monitor.styles.scss'; 

class Monitor extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'NOVEDADES',
                  subtitle: 'test placeholder',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  size: 'medium',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'SXVII',
                  subtitle: 'test placeholder',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  size: 'medium',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'SXIX',
                  subtitle: 'test placeholder',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  size: 'medium',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'SXX',
                  subtitle: 'test placeholder',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'SXXI',
                  subtitle: 'test placeholder',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
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
                {
                    this.state.sections.map(({title, subtitle, imageUrl, id, size}) => (
                        
                        <MenuItem key={id} title={title} subtitle={subtitle} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}
//we do need to store the state value of the menu items; 

export default Monitor; 

//about imageUrl: it is not enough to just write imageUrl={imageUrl}. See menu-item for more information. size is a prop 