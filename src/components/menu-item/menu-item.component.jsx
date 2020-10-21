import React from 'react'; 

import './menu-item.styles.scss'; 

const MenuItem = ({title, subtitle, imageUrl, size}) => ( //DESTRUCTURE THE TITLE 
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
    className={`${size} menu-item`}>
        <div className='contents'>
            <h1 className='title'> 
                {title}
            </h1>
            <span className='subtitle'>
                {subtitle}
            </span>
        </div>
</div>
); 

export default MenuItem; 

//to dynamically set content, we could just MenuItem = (props) and title.props for example. We won't. We DESTRUCTURE THE TITLE. 

/*[From monitor about imageUrl] style is an object with prop values equal to css values that we apply to the component; we create size: replace className='menu-item' with className={`${size}menu-item`}>. size works as a css value, it can be modified: 

*/