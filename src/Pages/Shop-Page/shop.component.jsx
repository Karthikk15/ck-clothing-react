import React from 'react';
import CollectionPreview from '../../Components/Collection-Preview/collection-preview.component';
import SHOP_DATA from './shop-data';

class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shopPage-Container'>
               {collections.map((item) => {
                  return <CollectionPreview key = {item.id} {...item} />
              })}
            </div>
        )
    }
} 

export default Shop;