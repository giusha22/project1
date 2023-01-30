import { Avatar, Box, Button, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserInitials, isUserAdmin } from '../../application/';
import { logoutUser, useUserInfo } from '../../redux';

export const UserIcon = () => {
    const [anchor,setAnchor] =useState(null);
    const handleClose = ()=>{
        setAnchor(null)
    };
    const navigate = useNavigate();
    const userInfo = useUserInfo();
    const dispatch = useDispatch();
    // console.log("userInfo",userInfo);
  return (
    <Box>
         <IconButton onClick={(e)=>{setAnchor(e.currentTarget)}}>
            <Avatar>{getUserInitials(userInfo?.firstName,userInfo?.lastName)}</Avatar>
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
              {!!userInfo && 
            <MenuItem>
                <Button onClick={()=>{
                    dispatch(logoutUser())
                }}>Logout</Button>
                <Button>profile</Button>
            </MenuItem>}
            {isUserAdmin(userInfo) && <MenuItem>
            <Button onClick={()=>{
                    navigate("/products/new")
                }}>add product</Button>
                
            </MenuItem>
            }
            
                {!userInfo && 
            <MenuItem>
                <Button onClick={()=>{
                    navigate("/register")
                }}>register</Button>

                <Button onClick={()=>{
                    navigate("/login")
                }}>Login</Button>
                
            </MenuItem>}

             </Menu>
        </Box>
    </Box>
  )
}

