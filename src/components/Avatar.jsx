import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import avatar from '../assets/image/Avatar.svg'

export default function Avatar() {
  return (
    <Box width='100%'>
      <Image src={avatar}/>
      <Text mt='12px' fontWeight='500' fontSize='14px' textAlign='center'>Username</Text>
    </Box>
  )
}
