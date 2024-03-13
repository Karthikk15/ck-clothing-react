import { createSelector } from "reselect";

const selectHome = (state) => state.homeItems;

export const selectHomeItems = createSelector([selectHome], 
    (homeItems) => homeItems.sections
    );
