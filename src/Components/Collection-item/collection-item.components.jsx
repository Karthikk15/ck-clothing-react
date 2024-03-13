import React from "react";
import { connect } from "react-redux";
import { AddItem } from '../Redux/Cart/cart.actions';
import CustomButton from '../Custom-Button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
return (
    <div key = {item.id} className='preview-item-container'>
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
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem : (item) => {
          dispatch(AddItem(item));
        }
    }
  }

export default connect(null, mapDispatchToProps)(CollectionItem);