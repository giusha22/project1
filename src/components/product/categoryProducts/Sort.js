import { MenuItem, Select } from '@mui/material'
import React from 'react'

export const Sort = ({sort, changeSort, changePage}) => {
  return (
    <Select value={sort} onChange={(e)=>{
        changeSort("sort",e.target.value)
        changePage("page",1)
    }}>
        <MenuItem value="price,desc">ფასი კლებადობით</MenuItem>
        <MenuItem value="price,asc">ფასი ზრდადობით</MenuItem>
        <MenuItem value="name,desc">სახელი კლებადობით</MenuItem>
        <MenuItem value="name,asc">სახელი ზრდადობით</MenuItem>

    </Select>
  )
}
