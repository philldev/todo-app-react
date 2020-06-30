import React from "react";
import { Box, List, ListItem, ListIcon, Image } from "@chakra-ui/core";
import todos from "../assets/image/todos.svg";
import account from "../assets/image/account.svg";
import logout from "../assets/image/logout.svg";

export default function Nav() {
  return (
    <List spacing={3} mt="60px">
      <ListItem display="flex">
        <Image src={todos} mr="1rem" />
        Todo
      </ListItem>
      <ListItem display="flex">
        <Image src={account} mr="1rem" />
        Account
      </ListItem>
      <ListItem display="flex">
        <Image src={logout} mr="1rem" />
        Logout
      </ListItem>
    </List>
  );
}
