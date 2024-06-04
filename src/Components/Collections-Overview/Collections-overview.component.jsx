import React from 'react';
import { connect, useSelector } from 'react-redux';
import CollectionPreview from '../../Components/Collection-Preview/collection-preview.component';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsContext'; 
import { selectProductsMap } from '../Redux/Shop/shop.selector';
// import { selectShopItems } from '../../Components/Redux/Shop/shop.selector';
import { selectProductLoading } from '../Redux/Shop/shop.selector';
import { Spinner } from '../Spinner/spinner.component';
const CollectionOverview = () => {
   const products = useSelector(selectProductsMap);
   const isProductLoading = useSelector(selectProductLoading);

    return (
        <div className='shopPage-overview'>
        {
        isProductLoading ? <Spinner /> : products && Object.keys(products).map((key, index) => {
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