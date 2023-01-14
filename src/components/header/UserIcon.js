import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const UserIcon = () => {
    const [anchor,setAnchor] =useState(null);
    const handleClose = ()=>{
        setAnchor(null)
    };
    const navigate = useNavigate();
  return (
    <Box>
        <IconButton onClick={(e)=>{
            setAnchor(e.currentTarget)
        }}>
            <Avatar>GM</Avatar>
        </IconButton>
        <Box>
            <Menu
             anchorEl={anchor}
             anchorOrigin={{
                vertical:"bottom",
                horizontal:"right",
             }}
             keepMounted
             transformOrigin={{
                vertical:"top",
                horizontal:"left",
             }}
             open={Boolean(anchor)}
             onClose={handleClose}
             >
                <MenuItem>
                <button onClick={()=>{
                    navigate("/register")
                }}>register</button>
                <button>profile</button>
                </MenuItem>
             </Menu>
        </Box>
    </Box>
  )
}

