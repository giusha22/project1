import React from 'react'
import { Box, styled, Toolbar } from '@mui/material'
import { AppBar } from '@mui/material'
import { Link } from 'react-router-dom'
import SerchBar from './SerchBar';
import { UserIcon } from './UserIcon';

const StyledAppBar = styled(AppBar)(()=>({
  background:"#fff",
  color:"#103B66",
  padding:"20px 30px",

}));
const StyledToolBar = styled(Toolbar)(()=>({
  display:"flex",
  width:"100%",
  justifyContent:"space-between",
}))

export const Header = () => {
  return (
    <Box>
        <StyledAppBar>
          <StyledToolBar>
            <Link to="/">home</Link>
            <SerchBar/> 
            <UserIcon/>
          </StyledToolBar>
        </StyledAppBar>
    </Box>
  )
}
