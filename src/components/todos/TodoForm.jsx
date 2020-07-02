import React from 'react'
import { FormControl, Input, InputGroup, InputRightElement, Icon, IconButton } from '@chakra-ui/core'

export default function TodoForm({handleSubmit}) {
  return (

    <FormControl as='form' mb='2rem' onSubmit={handleSubmit}>
      <InputGroup>
      <Input name='body' border='none' backgroundColor='inherit' borderBottom='1px solid black' borderRadius='0' _focus={{outline:'none'}} />
      <InputRightElement children={<IconButton backgroundColor='inherit' type='submit' icon="add" color="green.500" />} />
      </InputGroup>
    </FormControl>
  )
}
