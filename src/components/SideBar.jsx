import React, { useContext } from 'react'
import { Box } from '@chakra-ui/core'
import Avatar from './Avatar'
import Nav from './Nav'
import { UserContext } from '../Context/UserContext'

export default function SideBar({profilePicture ,username, setRender}) {
  const {user} =useContext(UserContext)
  return (
    <Box width='200px'>
      <Avatar profilePicture={user.imageUrl} username={user.username}/>
      <Nav setRender={setRender}/>
      
    </Box>
  )
}
