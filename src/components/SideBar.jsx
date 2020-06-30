import React from 'react'
import { Box } from '@chakra-ui/core'
import Avatar from './Avatar'
import Nav from './Nav'

export default function SideBar({profilePicture ,username}) {
  return (
    <Box width='200px'>
      <Avatar profilePicture={profilePicture} username={username}/>
      <Nav/>
      
    </Box>
  )
}
