import React from 'react';
import { Routes, Route } from 'react-router-dom'
import CollectionsOverviewComponent from '../../Components/Collections-Overview/Collections-overview.component';
import Collection from '../Collection/Collection.components';
import { useLocation } from 'react-router-dom';
const Shop = () => {
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