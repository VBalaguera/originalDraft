//POSTS EQUALS SHOP
const POSTS_DATA = [
    {
      id: 1,
      title: 'Future News',
      routeName: 'future-news',
      items: [
        {
          id: 1,
          name: 'first news',
          imageUrl: 'https://images.unsplash.com/photo-1595548381229-801503e72fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
          author: 'Aurelius'
        },
        {
          id: 2,
          name: 'second news',
          imageUrl: 'https://images.unsplash.com/photo-1604607931728-09defe20e194?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
          author: 'Cornelius'
        },
        {
          id: 3,
          name: 'third  news',
          imageUrl: 'https://images.unsplash.com/photo-1604694635813-50779c410c6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          author: 'Maximus'
        },
        {
          id: 4,
          name: '4th  news',
          imageUrl: 'https://images.unsplash.com/photo-1604719273588-679d4973eb7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          author: 'Herodotus'
        },
        {
          id: 5,
          name: '5th  news',
          imageUrl: 'https://images.unsplash.com/photo-1566882962112-763633a4f879?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          author: 'Catius'
        },
        {
          id: 6,
          name: '6th news',
          imageUrl: 'https://images.unsplash.com/photo-1604994932505-789b5d706844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          author: 'Aurelius'
        },
        {
          id: 7,
          name: '7 news',
          imageUrl: 'https://images.unsplash.com/photo-1604945423506-79b3f714707e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1317&q=80',
          author: 'Aurelius'
        },
        {
          id: 8,
          name: '8th news',
          imageUrl: 'https://images.unsplash.com/photo-1605127111801-4d63b3531775?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          author: 'Aurelius'
        },
        {
          id: 9,
          name: '9th news',
          imageUrl: 'https://images.unsplash.com/photo-1605127137807-61cf565a1d7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          author: 'Aurelius'
        }
      ]
    },
    {
      id: 2,
      title: 'Happenings',
      routeName: 'happenings',
      items: [
        {
          id: 10,
          name: 'Listen Now',
          imageUrl: 'https://images.unsplash.com/photo-1458909760068-5a3e1baf59c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
          author: 'Herodotus'
        },
        {
          id: 11,
          name: 'Cappable of being',
          imageUrl: 'https://images.unsplash.com/photo-1506976773555-b3da30a63b57?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          author: 'Cornelius'
        },
        {
          id: 12,
          name: 'Black shit',
          imageUrl: 'https://images.unsplash.com/photo-1533403611115-5b62680b6318?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80',
          author: 'Maximus'
        },
        {
          id: 13,
          name: 'Not too much',
          imageUrl: 'https://images.unsplash.com/photo-1549310786-a634d453e653?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
          author: 'Catius'
        },
        {
          id: 14,
          name: 'Humans',
          imageUrl: 'https://images.unsplash.com/photo-1578305698944-874fa44d04c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          author: 'Maximus'
        },
        {
          id: 15,
          name: 'A breakthrough',
          imageUrl: 'https://images.unsplash.com/photo-1562120679-3a7feddcb926?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
          author: 'Cornelius'
        },
        {
          id: 16,
          name: 'A good show',
          imageUrl: 'https://images.unsplash.com/photo-1558370781-d6196949e317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1058&q=80',
          author: 'Maximus'
        },
        {
          id: 17,
          name: 'Your diversion',
          imageUrl: 'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
          author: 'Catius'
        }
      ]
    },
    {
      id: 3,
      title: 'Reviews',
      routeName: 'reviews',
      items: [
        {
          id: 18,
          name: 'New routes',
          imageUrl: 'https://images.unsplash.com/photo-1549837019-ad6f9df09180?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          author: 'Cornelius'
        },
        {
          id: 19,
          name: 'The bunker',
          imageUrl: 'https://images.unsplash.com/photo-1541742410245-c2653591f8d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80',
          author: 'Catius'
        },
        {
          id: 20,
          name: 'Weirdest sensation',
          imageUrl: 'https://images.unsplash.com/photo-1564564179979-5e9833a3a8f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          author: 'Maximus'
        },
        {
          id: 21,
          name: 'Skelethon animations',
          imageUrl: 'https://images.unsplash.com/photo-1557720667-093b45dde7b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          author: 'Aurelius'
        },
        {
          id: 22,
          name: 'Built for it',
          imageUrl: 'https://images.unsplash.com/photo-1566699270403-3f7e3f340664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
          author: 'Cornelius'
        }
      ]
    },
    {
      id: 4,
      title: 'Articles',
      routeName: 'articles',
      items: [
        {
          id: 23,
          name: 'What can you do',
          imageUrl: 'https://images.unsplash.com/photo-1605453170394-53a8cd4c495c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          author: 'Catius'
        },
        {
          id: 24,
          name: 'About Sonic Mayhem',
          imageUrl: 'https://images.unsplash.com/photo-1605563037842-8e813f67312c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          author: 'Cornelius'
        },
        {
          id: 25,
          name: 'The bitter',
          imageUrl: 'https://images.unsplash.com/photo-1605557202138-097824c36ed2?ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80',
          author: 'Maximus'
        },
        {
          id: 26,
          name: 'Bloodier than expected',
          imageUrl: 'https://images.unsplash.com/photo-1605553265978-ac309d26414b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          author: 'Aurelius'
        },
        {
          id: 27,
          name: 'The First Time',
          imageUrl: 'https://images.unsplash.com/photo-1605557388673-cd04d65da355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
          author: 'Cornelius'
        },
        {
          id: 28,
          name: 'Oddities',
          imageUrl: 'https://images.unsplash.com/photo-1605462039207-e613217c4ce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          author: 'Catius'
        },
        {
          id: 29,
          name: 'Played it too much',
          imageUrl: 'https://images.unsplash.com/photo-1605583764297-49fb1057b0d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          author: 'Maximus'
        }
      ]
    },
    {
      id: 5,
      title: 'Recommendations',
      routeName: 'recommendations',
      items: [
        {
          id: 30,
          name: 'Checks all the boxes',
          imageUrl: 'https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          author: 'Cornelius'
        },
        {
          id: 31,
          name: 'Not too difficult to deal with',
          imageUrl: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          author: 'Maximus'
        },
        {
          id: 32,
          name: 'Traspasser',
          imageUrl: 'https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
          author: 'Catius'
        },
        {
          id: 33,
          name: 'A cheap trap',
          imageUrl: 'https://images.unsplash.com/photo-1470217957101-da7150b9b681?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          author: 'Cornelius'
        },
        {
          id: 34,
          name: 'Too much lead at once',
          imageUrl: 'https://images.unsplash.com/photo-1519602985774-5ca448b50061?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          author: 'Catius'
        },
        {
          id: 35,
          name: 'Seen and unseen',
          imageUrl: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          author: 'Maximus'
        }
      ]
    }
  ];

export default POSTS_DATA; 