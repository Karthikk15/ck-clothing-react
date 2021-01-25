import React from 'react';
import {withRouter} from 'react-router-dom';
import './menuitem-component.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    return (
        <div onClick = {() => history.push(`${match.url}${linkUrl}`)} className= {(size === undefined ? '': size) +' menu-item'}>
        <div style ={{backgroundImage: `url(${imageUrl})` }} className='background-img'></div>
        <div className='content'>
           <div className='title'>{title}</div>
           <span className='subtitle'>SHOP Now</span>
        </div>
     </div>
    )
}

export default withRouter(MenuItem);