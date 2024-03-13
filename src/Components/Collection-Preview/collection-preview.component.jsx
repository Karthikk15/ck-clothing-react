import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../Collection-item/collection-item.components';
import withRouter from '../../routes/components/withRouter';
import { Link } from 'react-router-dom';
const CollectionPreview = ({title, items, addItem, router}) => {
 return (
     <div className='preview-collection' style={{marginBottom:'5rem'}}>
         <Link to={`${title}`}> <h1 style={{cursor:'pointer'}}
         >{title.toUpperCase()}</h1>
         </Link>
         <div className='preview-container'>
         {items.filter((item, id) => id < 4).map((item, i) => <CollectionItem item={item} /> )}
         </div>
     </div>
 )
}

export default  withRouter(CollectionPreview);