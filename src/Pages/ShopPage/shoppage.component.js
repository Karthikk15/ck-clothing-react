import React from 'react';
import CollectionPreview from '../../Components/Collection-Preview/collection-preview.component';
import SHOP_DATA from './shop-data';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherProps }) => {
                        return <CollectionPreview key={id} {...otherProps} />
                    })
                }
            </div>
        )
    }
}

export default ShopPage;