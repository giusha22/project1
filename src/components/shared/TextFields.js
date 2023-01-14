import { TextField } from '@mui/material'
import React from 'react'

export const TextFieldComponent = ({ name, label, value, onChange, error }) => {
    return <TextField
    variant='outline'
    margin="dense"
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    error={error}
    helperText={error}
    
    />

}

