const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: {}
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      // case 'shop/Set_Products':
      //   return {...state, products: action.payload}
      case 'shop/FECTCH_PRODUCTS_START':
        return {...state, isLoading: true}
      case 'shop/FECTCH_PRODUCTS_SUCCESS':
        return {...state, products: action.payload, isLoading: false}
      case 'shop/FECTCH_PRODUCTS_Failure':
      return {...state, error: action.payload, isLoading: false}
        default:
            return state;
    }
}

export default shopReducer;

