import React, { useState } from 'react'
import { Badge, Box, Button, styled, Toolbar } from '@mui/material'
import { AppBar } from '@mui/material'
import { Link } from 'react-router-dom'
import SerchBar from './SerchBar';
import { UserIcon } from './UserIcon';
import {BsCart3} from "react-icons/bs"
import { useCartItems } from '../../redux';
import { CartDrawer } from './CartDrawer';

const StyledAppBar = styled(AppBar)(()=>({
  background:'lightGreen',
  color:"#fff",
  padding:"5px 30px"

}));
const StyledToolBar = styled(Toolbar)(()=>({
  display:"flex",
  width:"100%",
  justifyContent:"space-between",
}));
const StyledBadge = styled(Badge)(()=>({
"& .MuiBadge-badge":{
  width:"20px",
  height:"21px",
  color:"fff",
  background: "#F33451",
  top:"2px",
  right:"-3px"
}
}));

export const Header = () => {
  const cartItems =useCartItems();
  const cartItemsQuantity = cartItems.reduce((acc,curr)=>acc+curr.quantity,0);
  const [isCartOpen,setIsCartOpen] = useState(false);
  console.log("isCartOpen",isCartOpen);
  // const cartItemsQuantity = cartItem.reduce(
  //   (acc, curr) => acc + curr.quantity,
  //   0
  // );

  return (
    <Box>
        <StyledAppBar>
          <StyledToolBar>
            <Link to="/">home</Link>
            <SerchBar/> 
            <UserIcon/>
            <Button onClick={()=>setIsCartOpen(true)}>
              <StyledBadge badgeContent={cartItemsQuantity}>
                <BsCart3 size={35}/>
              </StyledBadge>
            </Button>
            <CartDrawer isOpen={isCartOpen} onClose={()=>{setIsCartOpen(false)}}/>
          </StyledToolBar>
        </StyledAppBar>
    </Box>
  )
}
