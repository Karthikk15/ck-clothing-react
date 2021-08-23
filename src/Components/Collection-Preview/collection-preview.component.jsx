import React from 'react';
import CustomButton from '../Custom-Button/custom-button.component';
import './collection-preview.style.scss';
import { connect } from 'react-redux';
import { AddItem } from '../Redux/Cart/cart.actions';
const CollectionPreview = ({title, items, addItem}) => {
 return (
     <div className='preview-collection' style={{marginBottom:'5rem'}}>
         <h1>{title.toUpperCase()}</h1>
         <div className='preview-container'>
         {items.filter((item, id) => id < 4).map((item, i) => {
           return (
                <div key = {i} className='preview-item-container'>
                    <div className='preview-image' style={{backgroundImage:`url(${item.imageUrl})`}}>
                    </div>
                    <div className='footer'>
                        <span>{item.name}</span>
                        <span>{`$${item.price}`}</span>
                    </div>
                    <div onClick ={() => addItem(item)} className='customBtn'>
                       <CustomButton value ='ADD TO CART' inverted></CustomButton>
                   </div>
                </div>
            )

         })}
         </div>
     </div>
 )
}

const mapDispatchToProps = (dispatch) => {
  return {
      addItem : (item) => {
        dispatch(AddItem(item));
      }
  }
}

export default connect(null, mapDispatchToProps)(CollectionPreview);