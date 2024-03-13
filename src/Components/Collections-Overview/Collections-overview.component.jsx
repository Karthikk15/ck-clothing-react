import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../Components/Collection-Preview/collection-preview.component';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsContext';
// import { selectShopItems } from '../../Components/Redux/Shop/shop.selector';
const CollectionOverview = () => {
   const products = useContext(ProductContext)
    return (
        <div className='shopPage-overview'>
        {
        Object.keys(products).map((key, index) => {
         const categoryItem = {title: key, items: products[key], id: key};
        return <CollectionPreview key = {index} {...categoryItem} />
        })
        }
     </div>
    );
} 

// const mapStateToProps = (state) => ({
//     Collections: selectShopItems(state)
//    })
   

// export default connect(mapStateToProps)(CollectionOverview);
export default CollectionOverview;