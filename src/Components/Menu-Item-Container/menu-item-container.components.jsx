import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../Menu-Item/menu-item.component';
import './menu-item-container.styles.scss';
import { selectHomeItems } from '../Redux/Menu-Items/menu-items.selector';
const MenuItemContainer = ({sections}) =>  (
           <div className='menu-item-container'>
          { sections.map(({id, ...otherSectionProps }) => {
               return <MenuItem key ={id} {...otherSectionProps}></MenuItem>
           })}
           </div>
)

const mapStateToProps = (state) => ({
    sections: selectHomeItems(state)
})

export default connect(mapStateToProps, null)(MenuItemContainer);