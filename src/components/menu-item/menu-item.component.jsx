//MENU ITEM EQUALS FLAGSHIP CONTENT
import React from 'react'; 
import { withRouter } from 'react-router-dom'; //Just like this menu-item is a function that takes props and renders out a comp, a higher order component (a function that takes a comp as an arg and returns a modified comp). Is a function that gives you back a powdered component. Here, we are powering up menu-item comp to have access to the Router. 

import './menu-item.styles.scss'; 

const MenuItem = ({title, subtitle, imageUrl, size, history, linkUrl, match}) => ( //DESTRUCTURE THE TITLE 
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
    <div className='background-image'
    style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
        <div className='contents'>
            <h1 className='title'> 
                {title.toUpperCase()}
            </h1>
            <span className='subtitle'>
                {subtitle}
            </span>
        </div>
</div>
); 

export default withRouter(MenuItem); //Router returns back a powdered menu-item comp with access to those location, match, and history props that we need to access to.  

//to dynamically set content, we could just MenuItem = (props) and title.props for example. We won't. We DESTRUCTURE THE TITLE. 

/*[From monitor about imageUrl] style is an object with prop values equal to css values that we apply to the component; we create size: replace className='menu-item' with className={`${size}menu-item`}>. size works as a css value, it can be modified: 

*/