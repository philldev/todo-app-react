import React from 'react'
import { Box, Heading, Button, Divider } from '@chakra-ui/core'
import AccountDetails from './AccountDetails'
import { theme } from '../utils.js/theme'

export default function Account() {
  return (
    <Box ml='135px' width='875px'>
      
      <Heading>Username</Heading>

      <Button border={`1px solid ${theme.primaryColor}`} color={theme.primaryColor}>Upload Photo</Button>

      <Divider borderColor='gray'/>

      <AccountDetails/>
    </Box>
  )
}
