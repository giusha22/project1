import { Typography } from '@mui/material'
import React from 'react'

export const TypographyCompoment = ({ variant="outlined",children }) => {
  return (
    <Typography variant={variant}>
      {children}
    </Typography>
  )
}
