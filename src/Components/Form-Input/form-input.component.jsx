import React from 'react';
import './form-input.component.scss';

const FormInput = ({type , name,  value, labelValue, onChange}) => {
  return (
      <div className='input-container'>
        <input type={type} name={name} value={value}  onChange={onChange} required/>
        <label for={type} className = {`input-label${value.length > 0 ? ' shrink' :''}`}>{labelValue}</label>
      </div>
  )
}

export default FormInput;