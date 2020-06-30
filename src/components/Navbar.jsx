import React from 'react'
import { Box, Heading } from '@chakra-ui/core'
import { theme } from '../utils.js/theme'

export default function Navbar() {
  return (
    <Box width='100%'
      backgroundColor={theme.primaryColor}
      height='66px'
      display='flex'
      alignItems='center'
      pl='30px'
    >
      <Heading as='h4' size='lg' color='white'>TodoApp</Heading>
      
    </Box>
  )
}
