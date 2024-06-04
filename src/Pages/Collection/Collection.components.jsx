import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { ProductContext } from "../../contexts/ProductsContext";
import { selectCollection, selectProductsMap } from "../../Components/Redux/Shop/shop.selector";
import CollectionItem from "../../Components/Collection-item/collection-item.components";
import './Collection.styles.scss';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Collection = () => {
const {categoryId} = useParams(); 
const categoriesMap = useSelector(selectProductsMap);
const [product, setProduct] = useState(categoriesMap[categoryId]);
//Update product only when there is change in category and category map data
useEffect(()=>{
setProduct(categoriesMap[categoryId]);
},[categoryId, categoriesMap])

return (
    <div className='collection-page'>
        <h2 className='title'>{categoryId.toUpperCase()}</h2>
        <div className="items">
            {
              product &&  product.map((item) =>  <CollectionItem key={item.id} item={item} /> )
            }
        </div>
    </div>
)
}



export default Collection;