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
            imageUrl: 'https://images.unsplash.com/photo-1595548381229-801503e72fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
            contents: [
                {
                  secTitle: 'NOVEDADES',
                  secSubtitle: 'test placeholder',
                  imageUrl: 'https://images.unsplash.com/photo-1595548381229-801503e72fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
                  size: 'large',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  secTitle: 'SXVII',
                  secSubtitle: 'test placeholder',
                  imageUrl: 'https://images.unsplash.com/photo-1458909760068-5a3e1baf59c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
                  size: 'large',
                  id: 2,
                  linkUrl: 'jackets'
                },
                {
                  secTitle: 'Reviews',
                  secSubtitle: 'test placeholder',
                  imageUrl: 'https://images.unsplash.com/photo-1549837019-ad6f9df09180?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                  size: 'medium',
                  id: 3,
                  linkUrl: 'sneakers'
                },
                {
                  secTitle: 'Recommendations',
                  secSubtitle: 'test placeholder',
                  imageUrl: 'https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  size: 'medium',
                  id: 5,
                  linkUrl: 'mens'
                },
                {
                    secTitle: 'NOVEDADES',
                    secSubtitle: 'test placeholder',
                    imageUrl: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    size: 'small',
                    id: 6,
                    linkUrl: 'hats'
                  },
                  {
                    secTitle: 'SXVII',
                    secSubtitle: 'test placeholder',
                    imageUrl: 'https://images.unsplash.com/photo-1519602985774-5ca448b50061?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                    size: 'small',
                    id: 7,
                    linkUrl: 'jackets'
                  },
                  {
                    secTitle: 'SXIX',
                    secSubtitle: 'test placeholder',
                    imageUrl: 'https://images.unsplash.com/photo-1470217957101-da7150b9b681?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
                    size: 'small',
                    id: 8,
                    linkUrl: 'sneakers'
                  },
                  {
                    secTitle: 'SXIX',
                    secSubtitle: 'test placeholder',
                    imageUrl: 'https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
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
              <div>
                <h1 className='flagship-title'> This is the Flagship </h1>
              </div>

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