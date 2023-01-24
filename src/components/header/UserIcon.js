import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material'
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
    console.log("userInfo",userInfo);
  return (
    <Box>
        <IconButton onClick={(e)=>{
            setAnchor(e.currentTarget)
        }}>
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
                <button onClick={()=>{
                    dispatch(logoutUser())
                }}>Logout</button>
                <button>profile</button>
            </MenuItem>}
            {isUserAdmin(userInfo) && <MenuItem>
            <button onClick={()=>{
                    navigate("/products/new")
                }}>add product</button>
                 <button onClick={()=>{
                    navigate("/")
                }}>Home</button>
            </MenuItem>
            }
                {!userInfo && 
            <MenuItem>
                <button onClick={()=>{
                    navigate("/register")
                }}>register</button>

                <button onClick={()=>{
                    navigate("/login")
                }}>Login</button>
                
            </MenuItem>}

             </Menu>
        </Box>
    </Box>
  )
}

