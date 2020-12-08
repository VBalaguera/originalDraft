// MODULE 10, cont: 
// moving all sections from directory.component.jsx to here 

const INITIAL_STATE = {
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
}; 

//there's a debate to store one-time use, unmodifiable data inside one comp; some say it is overkill, but there's a benefit to it that we will see later in the testing phase. 
// moving the state outside of the comp into its own reducer makes testing easier. 

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state; 
    }
}; 

export default directoryReducer; 