import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../Components/firebase/firebase";
import SHOP_DATA from "../Pages/Shop-Page/shop-data";
export const ProductContext = createContext({
    products:[]
})
 
export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    
    const value = products;

    useEffect(() => {
      const getProductCategories = async () => {
        const result =  await getCategoriesAndDocuments();
        setProducts(result);
      }  
      getProductCategories();
    },[])

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
} 