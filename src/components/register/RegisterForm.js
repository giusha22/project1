import { FormControl } from '@mui/material'
import React from 'react'
import { TextFieldComponent } from '../shared'
import { UseForm } from '../../application'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const generateRegisterFormValues =()=>{
return {
  firstName:{
    value:"",
    require:true,
    error:"",
      validateInput: (name) =>
      name.length >3 ? null :"name should have at least 3 character",
  },
  lastName:{
    value:"",
    require:true,
    error:"",
      validateInput: (lastName) =>
      lastName.length >3 ? null :"lastName should have at least 3 character",
  },
  email:{
    value:"",
    require:true,
    error:"",
      validateInput: (email) =>
      email.include("@gmail.com") ? null :"email is not valid",
  },
  password:{
    value:"",
    require:true,
    error:"",
      validateInput: (password) =>
      password.length >6 ? null :"password should have at least 6 character",
  },
}
};

export const RegisterForm = () => {
  const { formValues,onInputChange} = UseForm({
    defaultFormValues: generateRegisterFormValues(),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = (e)=>{};


  return (
    <FormControl fullWidth>

      <TextFieldComponent
        name="firstName"
        label="firstName"
        value={formValues.firstName.value}
        onChange={onInputChange}
        error={!!formValues.firstName.error}
        helperText={formValues.firstName.error}
        />
      <TextFieldComponent
        name="lastName"
        label="lastName"
        value={formValues.lastName.value}
        onChange={onInputChange}
        error={!!formValues.lastName.error}
        helperText={formValues.lastName.error}
        />
      <TextFieldComponent
        name="email"
        label="email"
        value={formValues.email.value}
        onChange={onInputChange}
        error={!!formValues.email.error}
        helperText={formValues.email.error}
        />
      <TextFieldComponent
        name="password"
        label="password"
        value={formValues.password.value}
        onChange={onInputChange}
        error={!!formValues.password.error}
        helperText={formValues.password.error}
        />
    </FormControl>
  )
}
