import { Box, styled,  } from '@mui/material'
import { margin } from '@mui/system'
import React from 'react'
import { Header } from './components/header'
import {RoutesComponent} from "./Routes"

const StyledComponentContainer = styled(Box)(()=>({
  marginTop:"120px"
}))
const App = () => {
  return (
    <Box>
      <Header/>
      <StyledComponentContainer>
      <RoutesComponent />

      </StyledComponentContainer>
    </Box>
  )
}

export default App