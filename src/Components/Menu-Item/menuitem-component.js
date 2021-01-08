import React from 'react';
import './menuitem-component.styles.scss';

const MenuItem = ({title, imageUrl, size}) => {
    return (
        <div className= {(size === undefined ? '': size) +' menu-item'}>
        <div style ={{backgroundImage: `url(${imageUrl})` }} className='background-img'></div>
        <div className='content'>
           <div className='title'>{title}</div>
           <span className='subtitle'>SHOP Now</span>
        </div>
     </div>
    )
}

export default MenuItem;