import CartActions from "./cart.types";
 
export const ToggleCartDropDown = () => {
    return {
      type: CartActions.TOGGLE_CART_DROPDOWN
    }
}

export const AddItem = (item) => ({
  type : CartActions.ADD_ITEM,
  payload: item  
})

export const RemoveItem = (item) => ({
  type : CartActions.REMOVE_ITEM,
  payload: item  
})
export const RemoveSpecificItem = (item) => ({
  type : CartActions.REMOVE_SPECIFIC_ITEM,
  payload: item  
})