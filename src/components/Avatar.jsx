import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import avatar from '../assets/image/Avatar.svg'

export default function Avatar( {username,profilePicture}) {
  return (
    <Box width='100%'>
      <Image src={profilePicture !== '' ?  profilePicture :  avatar }/>
      <Text mt='12px' fontWeight='500' fontSize='14px' textAlign='center'>{username}</Text>
    </Box>
  )
}
