import React from 'react';
import { Routes, Route } from 'react-router-dom'
import CollectionsOverviewComponent from '../../Components/Collections-Overview/Collections-overview.component';
import Collection from '../Collection/Collection.components';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../Components/firebase/firebase';
import { setProducts } from '../../Components/Redux/Shop/shop.action';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../Components/Redux/Shop/shop.action';

const Shop = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsAsync());
      },[])

    return (
            // <div className='shopPage-Container'>
            // <CollectionsOverviewComponent />
            <Routes>
             <Route index element={<CollectionsOverviewComponent />} />
             <Route path=':categoryId' element={<Collection />} />
                {/* <Route exact path={`${match.pathname}`} element={CollectionsOverviewComponent} />
            <Route path={`${match.pathname}/:categoryId`} element={Collection} /> */}
            </Routes>
            // </div>
        )
}
      
export default Shop;