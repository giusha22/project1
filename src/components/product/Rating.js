import { Rating as MuiRating } from '@mui/material'
import React from 'react'

export const Ratings = ({ value=1, isDisable, onChange}) => {
  return (
    <MuiRating value={value} disabled={isDisable} onChange={onChange} precision={0.5}/>
  )
}
