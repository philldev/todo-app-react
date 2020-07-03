import React from 'react'
import { ListItem, Image, Box } from '@chakra-ui/core'

export default function NavItem({handleClick, image, text, active}) {
  return (
    <ListItem
        backgroundColor={active ? '#F65A18' : '#1E2B39'}
        py="3px"
        display="flex"
        onClick={handleClick}
        id={text}
        pl='5px'
        mb='10px'
        cursor='pointer'
      >
        <Image cursor="pointer" src={image} mr="1rem" />
          {text}
      </ListItem>
  )
}
