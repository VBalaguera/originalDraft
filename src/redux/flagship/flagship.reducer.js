// FLAGSHIP EQUALS DIRECTORY 

const INITIAL_STATE = {
    mainTitle: 'frugality',
    mainSubtitle: 'this is a test',
    imageUrl: 'https://images.unsplash.com/photo-1595548381229-801503e72fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    contents: [
        {
          secTitle: 'Future News',
          secSubtitle: 'test placeholder',
          imageUrl: 'https://images.unsplash.com/photo-1595548381229-801503e72fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
          size: 'large',
          id: 1,
          linkUrl: 'posts/futureNews'
        },
        {
          secTitle: 'Happenings',
          secSubtitle: 'test placeholder',
          imageUrl: 'https://images.unsplash.com/photo-1458909760068-5a3e1baf59c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
          size: 'large',
          id: 2,
          linkUrl: 'posts/happenings'
        },
        {
          secTitle: 'Reviews',
          secSubtitle: 'test placeholder',
          imageUrl: 'https://images.unsplash.com/photo-1549837019-ad6f9df09180?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          size: 'medium',
          id: 3,
          linkUrl: 'posts/reviews'
        },
        {
          secTitle: 'Recommendations',
          secSubtitle: 'test placeholder',
          imageUrl: 'https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          size: 'medium',
          id: 5,
          linkUrl: 'posts/recommendations'
        },
      ],
};

const flagshipReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state; 
    }
}; 

export default flagshipReducer; 