import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Box } from '@chakra-ui/core'
import Account from '../components/Account'

export default function Home() {
  return (
    <Box>
      <Navbar/>
      <Box display='flex' as='main' pl='30px' pt='30px'>
      <SideBar/>
      <Account/>

      </Box>
      
    </Box>
  )
}
