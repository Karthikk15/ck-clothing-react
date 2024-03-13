import { createSelector } from "reselect";

const selectShop = (state) => state.shopItems;

export const selectShopItems = createSelector(
    [selectShop],
    (shopItems) => Object.keys(shopItems).map((key) => shopItems[key])
);

export const selectCollection = (collectionURLParam) => createSelector(
    [selectShop],
    (Collections) => Collections[collectionURLParam]
)