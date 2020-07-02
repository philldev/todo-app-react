import { Box, Image, List, ListItem } from "@chakra-ui/core";
import React from "react";
import account from "../assets/image/account.svg";
import logout from "../assets/image/logout.svg";
import todos from "../assets/image/todos.svg";

export default function Nav({setRender}) {
  const handleClick = e => {
    if(e.target.id === 'account') setRender('account') 
    else setRender('todos')
  }
  return (
    <List spacing={3} mt="60px">
      <ListItem  display="flex" >
        <Image cursor='pointer' src={todos} mr="1rem" onClick={handleClick} />
        <Box cursor='pointer' id='todos' onClick={handleClick}>Task</Box>
      </ListItem>
      <ListItem id='account' display="flex" >
        <Image cursor='pointer' onClick={handleClick} src={account} mr="1rem" />
        <Box cursor='pointer' id='account' onClick={handleClick}>Account </Box> 
      </ListItem>
      <ListItem  display="flex">
        <Image src={logout} mr="1rem" />
         <span >Logout </span>
      </ListItem>
    </List>
  );
}
