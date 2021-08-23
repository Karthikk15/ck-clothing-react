

const updateCartItem = (prevCartItems, currentCartItem) => {
    const isCartItemFound = prevCartItems.find((item) =>  item.id === currentCartItem.id);

    if(isCartItemFound) {
     return prevCartItems.map((item) => {
        return (item.id === currentCartItem.id) ? {...item, quantity : item.quantity + 1} : item
     })
    }

    return [...prevCartItems, {...currentCartItem, quantity: 1}]
}

export const removeSpecificItem = (prevCartItems, itemToRemove) => {
const itemIndex = prevCartItems.indexOf(itemToRemove);  
if(itemToRemove.quantity > 1) {
    return prevCartItems.map((item) => {
         return item.id === itemToRemove.id ? { ...item, quantity: item.quantity -1 } : item;
    })
 } else
 return prevCartItems.filter((item) => item.id !== itemToRemove.id);
}

export default updateCartItem;