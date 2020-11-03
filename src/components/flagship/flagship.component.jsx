//FLAGSHIP EQUALS DIRECTORY/MONITOR 

import React from 'react';

import FlagshipContent from '../flagship-content/flagship-content.component'; 

import './flagship.styles.scss'; 

class Flagship extends React.Component {
    constructor() {
        super();

        this.state = {
            mainTitle: 'frugality',
            mainSubtitle: 'this is a test',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            contents: [
                {
                  secTitle: 'NOVEDADES',
                  secSubtitle: 'test placeholder',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  size: 'large',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  secTitle: 'SXVII',
                  secSubtitle: 'test placeholder',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  size: 'large',
                  id: 2,
                  linkUrl: 'jackets'
                },
                {
                  secTitle: 'SXIX',
                  secSubtitle: 'test placeholder',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  size: 'medium',
                  id: 3,
                  linkUrl: 'sneakers'
                },
                {
                  secTitle: 'SXXI',
                  secSubtitle: 'test placeholder',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'medium',
                  id: 5,
                  linkUrl: 'mens'
                },
                {
                    secTitle: 'NOVEDADES',
                    secSubtitle: 'test placeholder',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'small',
                    id: 6,
                    linkUrl: 'hats'
                  },
                  {
                    secTitle: 'SXVII',
                    secSubtitle: 'test placeholder',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    size: 'small',
                    id: 7,
                    linkUrl: 'jackets'
                  },
                  {
                    secTitle: 'SXIX',
                    secSubtitle: 'test placeholder',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    size: 'small',
                    id: 8,
                    linkUrl: 'sneakers'
                  },
                  {
                    secTitle: 'SXIX',
                    secSubtitle: 'test placeholder',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    size: 'large',
                    id: 9,
                    linkUrl: 'sneakers'
                  },
              ],
        }
    }

    render() {
        return (
            <div className='flagship'>

                {
                    this.state.contents.map(({id, ...otherContentsProps}) => (
                        <FlagshipContent key={id} {...otherContentsProps}/>
                    ))
                }
        </div>
        )
    }
}

export default Flagship; 

/* PARENT COMPONENT OF FLAGSHIP-CONTENT 

const Flagship = ({frugality}) => (
    <div className='flagship'>
        <h1>
            {frugality}
        </h1>
    </div>
); 

*/