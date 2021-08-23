import React from 'react';
import './custom-button.styles.scss';
import { ReactComponent as ReactLogo} from '../../assests/gLogo.svg';


const CustomButton = ({value , onClick , isGoogle, inverted}) => {
    return (
        <button type= {isGoogle ? 'button' : 'submit'} className={ `${inverted ? 'inverted' : ''}${isGoogle ? 'googleBtn' : ''}`} onClick={onClick}>
            {isGoogle ? <ReactLogo className='svgLogo'/> : ''}
            { value}
        </button>
    )
}
export default CustomButton;