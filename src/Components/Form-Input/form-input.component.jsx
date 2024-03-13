import React from 'react';
import {InputContainer ,  InputLabel} from './form-input.style';

const FormInput = ({type , name,  value, labelValue, onChange}) => {
  return (
      <InputContainer>
        <input type={type} name={name} value={value}  onChange={onChange} required/>
        <InputLabel shrink={value.length}>{labelValue}</InputLabel>
      </InputContainer>
  )
}

export default FormInput;