import React from 'react';
import './collection-preview.style.scss';


const CollectionPreview = ({title, items}) => {
 return (
     <div className='preview-collection' style={{marginBottom:'5rem'}}>
         <h1>{title.toUpperCase()}</h1>
         <div className='preview-container'>
         {items.filter((item, id) => id < 4).map((item, i) => {
           return (
                <div key = {i} className='preview-item-container'>
                    <div className='preview-image' style={{backgroundImage:`url(${item.imageUrl})`}}>
                    </div>
                    <div className='footer'>
                        <span>{item.name}</span>
                        <span>{`$${item.price}`}</span>
                    </div>
                </div>
            )

         })}
         </div>
     </div>
 )
}

export default CollectionPreview;