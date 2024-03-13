
import Styles from 'styled-components';
import { Link } from 'react-router-dom';
export const HeaderContainer = Styles.div`
width: 100%;
height: 100px;
display: flex;
justify-content: space-between;
position: relative;
`

export const OptionContainer = Styles.div`
display: flex;
align-items: center;
cursor: pointer;
`
export const Option = Styles(Link)`
padding: 0px 20px;
`

export const LogoStyle = Styles.img`
width: 150px;
height: 100%;
`


// .logo {
//     width: 150px;
//     height: 100%;
// }

// .header-container {
//     width: 100%;
//     height: 100px;
//     display: flex;
//     justify-content: space-between;
//     position: relative;
//     .option-container {
//         display: flex;
//         align-items: center;
//         cursor: pointer;
//         .option {
//             padding: 0px 20px;
//         }
//     }
// }