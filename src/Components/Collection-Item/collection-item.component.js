import React from "react";
import './collection-item.component.style.scss';
const CollectionItem = ({ name, price, imageUrl }) => {
    return (
        <div className ='collection-item'>
          <div className='image' style={{backgroundImage: `url(${imageUrl})`}}></div>
          <div className='footer'>
           <span className='name'>{name}</span>
           <span className='price'>{'$'+price}</span>
          </div>
        </div>
    )
}

export default CollectionItem;