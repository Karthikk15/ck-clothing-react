import styled from "styled-components";

export const ImageItem = styled.div`
background-position: center;
     background-size: cover;
     width: 100%;
     height: 100%;
     background-image: ${({ imageUrl }) => `url(${imageUrl})`};

`

export const ContentContainer = styled.div`
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      padding: 10px 20px;
      position: absolute;
      text-align: center;
      background-color: white;
      opacity: 0.6;
`

export const Title = styled.span`
font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;
        color: #4a4a4a;
`

export const Subtitle = styled.span`
font-weight: lighter;
        font-size: 16px;
`

export const MenuItemStyled = styled.div`
    width: 30%;
    height: 240px;
    border: 1px solid black;
    margin: 5px;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
    align-items: center;
    overflow: hidden;
    &:hover {
        cursor: pointer;
        & ${ImageItem} {
          transform: scale(1.2);
            transition: transform 6s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
    }
`

// .menu-item {
//     width: 30%;
//     height: 240px;
//     border: 1px solid black;
//     margin: 5px;
//     display: flex;
//     justify-content: center;
//     flex: 1 1 auto;
//     align-items: center;
//     overflow: hidden;
//     &:hover {
//      cursor: pointer;

//     .imageItem {
//         transform: scale(1.2);
//         transition: transform 6s cubic-bezier(0.075, 0.82, 0.165, 1);
//     }
//     }

//     .imageItem {
//      background-position: center;
//      background-size: cover;
//      width: 100%;
//      height: 100%;
//     }

//     &.large {
//         height: 360px;
//     }

//   .contentContainer {
//       display: flex;
//       flex-direction: column;
//       border: 1px solid black;
//       padding: 10px 20px;
//       position: absolute;
//       text-align: center;
//       background-color: white;
//       opacity: 0.6;
//       .title {
//         font-weight: bold;
//         margin-bottom: 6px;
//         font-size: 22px;
//         color: #4a4a4a;
//       }
  
//       .subtitle {
//         font-weight: lighter;
//         font-size: 16px;
//       }
//   }
// }