import { Box, Link, styled,  } from '@mui/material'
import { margin } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { instance } from './application'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar/Sidebar'
import { fetchCart, fetchHomePageProducts, useUserInfo } from './redux'
import {RoutesComponent} from "./Routes"

const StyledComponentContainer = styled(Box)(()=>({
  padding:"20px",
  marginLeft:"255px",
  marginTop:"70px",
  background:"white",
  minHeight:"100vh"
})) 
const App = () => {

  const dispatch = useDispatch();
  const userInfo = useUserInfo();
  useEffect(()=>{
    dispatch(fetchHomePageProducts())
    if(userInfo){
      dispatch(fetchCart(userInfo._id))
    }
  },[])
  
  return (
    <Box>
      <Header/>
      <Sidebar/>

      <StyledComponentContainer>
      <RoutesComponent />

      </StyledComponentContainer>
    </Box>
  )
}

export default App