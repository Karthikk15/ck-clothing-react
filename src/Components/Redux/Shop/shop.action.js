import { ProductsAction } from "./shop.type";
import { getCategoriesAndDocuments } from "../../firebase/firebase";

export const setProducts = (products) => {
    return {
        type: ProductsAction.SET_PRODUCTS,
        payload: products
    }
}

export const fetchProductsStart = () => {
    return {
        type: ProductsAction.FECTCH_PRODUCTS_START
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: ProductsAction.FECTCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFailure = (err) => {
    return {
        type: ProductsAction.FECTCH_PRODUCTS_FAILURE,
        payload: err
    }
}


export const fetchProductsAsync = () => {
    return async (dispatch) => {
        dispatch(fetchProductsStart());
        try{
            const result =  await getCategoriesAndDocuments();
            dispatch(fetchProductsSuccess(result));
        } catch(err) {
            dispatch(fetchProductsFailure(err))
        }
    }
}
