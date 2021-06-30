import React from 'react';
import {sections} from '../../directory.data';
import MenuItem from '../Menu-Item/menu-item.component';
import './menu-item-container.styles.scss';
class MenuItemContainer extends React.Component {
       constructor(){
           super();
           this.state = {
               'sections': sections
           }
       }

       render() {
           const {sections} = this.state;
          return (
           <div className='menu-item-container'>
          { sections.map(({id, ...otherSectionProps }) => {
               return <MenuItem key ={id} {...otherSectionProps}></MenuItem>
           })}
           </div>
          )
       }
}

export default MenuItemContainer;