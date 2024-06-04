import { createSelector } from "reselect";

export const selectProducts = (state) => state.products;

export const selectProductsMap = createSelector(
    [selectProducts],
    (products) => {
       return products.products.reduce((acc, item)=>{
         const {title, items} = item;
         acc[title] = items;
         return acc;
        },{})
    }
);

export const selectProductLoading = createSelector(
    [selectProducts],
    (products) => {
        return products.isLoading;
    }
)

// export const selectCollection = (collectionURLParam) => createSelector(
//     [selectShop],
//     (Collections) => Collections[collectionURLParam]
// )