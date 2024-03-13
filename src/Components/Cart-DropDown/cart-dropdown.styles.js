import styled from "styled-components";


export const CartDropDownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 0px;
z-index: 5;

    button {
        margin-top: auto;
           }
`

export const CartItems = styled.div`
height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const EmptyCart = styled.span`
font-size: 16px;
margin:  auto;
color: #b1ada2;
`

// .cart-dropDown-container {
//     border: 1px solid black;
//     width: 240px;
//     height: 300px;
//     display: flex;
//     flex-direction: column;
//     z-index: 1;
//     position: absolute;
//     background-color: white;
//     top:80px;
//     padding: 10px 10px;
//     right: 0px;
//     .cart-items {
//         height: 240px;
//         display: flex;
//         flex-direction: column;
//         overflow: auto;
//         margin-bottom: 15px;
//         .empty-cart {
//             font-size: 18px;
//             margin: 50px auto;
//             color:#b1ada2;
//         }
//     }
//     button {
//         font-size: 12px;
//     }
 
// }