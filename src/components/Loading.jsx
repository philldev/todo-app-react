import { Flex, Spinner } from '@chakra-ui/core'
import React from 'react'

export default function Loading() {
  return (
    <Flex justifyContent='center' alignItems='center' height='100%' width='100%'>
      <Spinner size='sm'/>
    </Flex>
  )
}
