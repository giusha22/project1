import React, { useState } from 'react'
  
export const UseForm = ({defaulFormtValues}) => {
    const [formValues,setFormValues] = useState(defaulFormtValues);


    const onInputChange = (e)=>{
      const eventName = e.target.name;
      const { validateInput }= formValues[eventName];
      setFormValues((prevFormValues) => {
        return {
          ...prevFormValues[eventName],
          value:e.target.value,
          error: validateInput ? validateInput(e.target.value):"",
        }
      });
  
    };
    const checkButtonDisable = (values)=>{
      for(const [key, objValue] of Object.entries(values)){
        if(objValue.requird && (objValue.error || objValue.value)){
          return true
        };
      }
    };
    const clearForm = (obj)=>{
      setFormValues(obj)
    }
    
  return {
    formValues,
    setFormValues,
    onInputChange,
    checkButtonDisable,
    clearForm,
  }
}
