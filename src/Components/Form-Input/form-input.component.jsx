import React from 'react';
import './form-input.component.scss';

const FormInput = ({type , value, labelValue, onChange}) => {
  return (
      <div className='input-container'>
        <input type={type} name={type} value={value}  onChange={onChange} />
        <label for={type} className = {`input-label${value.length > 0 ? ' shrink' :''}`}>{labelValue}</label>
      </div>
  )
}

export default FormInput;