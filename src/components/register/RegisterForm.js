import { FormControl } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UseForm } from '../../application/Hooks/useForm';
import { authenticateUser } from '../../redux';
import { TextFieldComponent } from '../shared/TextFields';
const generateRegisterFormValues = () => {
  return{
    firstName: {
      value:"",
      required: true,
      error:"",
      validateInput: (name) => 
      name.length > 3 ? null : "name should have at least 3 caracter",
    },
    lastName: {
      value:"",
      required: true,
      error:"",
      validateInput: (lastName) => 
      lastName.length > 3 ? null : "last name should have at least 3 caracter",
    },
    email: {
      value:"",
      required: true,
      error:"",
      validateInput: (email) => 
      email.includes("@gmail.com") ? null : "email is not valid",
    },
    password: {
      value:"",
      required: true,
      error:"",
      validateInput: (password) => 
      password.length > 6 ? null : "password should have at least 6 caracter",
    },
  }
};
export const RegisterForm = () => {
  const { formValues, onInputChange} = UseForm({
    defaultFormValues:generateRegisterFormValues(),
  });
  const dispatch = useDispatch();
  const naviagete = useNavigate();
  console.log("formValues",formValues);
  const onRegister = (e)=>{
    e.preventDefault();
    const firstName = formValues.firstName.value
    const lastName = formValues.lastName.value
    const email = formValues.email.value
    const password = formValues.password.value
    dispatch(authenticateUser({formValues: {firstName, lastName, email, password},
       isLogin:false }
       ))
    .unwrap()
    .then(()=>naviagete("/"))
  };
  return (
    <FormControl fullWidth>
    <TextFieldComponent
      name='firstName'
      label="firstName"
      onChange={onInputChange}
      error={!!formValues.firstName.error}
      helperText={formValues.firstName.error}
      />
    <TextFieldComponent
      name='lastName'
      label="lastName"
      onChange={onInputChange}
      error={!!formValues.lastName.error}
      helperText={formValues.lastName.error}
      />
      <TextFieldComponent
      name='email'
      label="email"
      onChange={onInputChange}
      error={!!formValues.email.error}
      helperText={formValues.email.error}
      />
      <TextFieldComponent
      name='password'
      label="password"
      onChange={onInputChange}
      error={!!formValues.password.error}
      helperText={formValues.password.error}
      />
      <button onClick={onRegister}>Register</button>
    </FormControl>
  )
}
