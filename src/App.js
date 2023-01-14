import { Box } from '@mui/material'
import React from 'react'
import { Header } from './components/header'
import {RoutesComponent} from "./Routes"
const App = () => {
  return (
    <Box>
      <Header/>
      <Box>
      <RoutesComponent />

      </Box>
    </Box>
  )
}

export default App