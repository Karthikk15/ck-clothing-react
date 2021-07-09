import React from 'react';
import './custom-button.styles.scss';
import { ReactComponent as ReactLogo} from '../../assests/gLogo.svg';


const CustomButton = ({value , onClick , isGoogle}) => {
    return (
        <button type= {isGoogle ? 'button' : 'submit'} className={`${isGoogle ? 'googleBtn' : ''} `} onClick={onClick}>
            {isGoogle ? <ReactLogo className='svgLogo'/> : ''}
            { value}
        </button>
    )
}
export default CustomButton;