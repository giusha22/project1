import { Rating as MuiRating } from '@mui/material'
import React from 'react'

export const Ratings = ({ value=1, isDisabled, onChange}) => {
  return (
    <MuiRating value={value} disabled={isDisabled} onChange={onChange} precision={0.5}/>
  )
}
 