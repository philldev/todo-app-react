import { Box, Image, List, ListItem } from "@chakra-ui/core";
import React from "react";
import account from "../assets/image/account.svg";
import logout from "../assets/image/logout.svg";
import todos from "../assets/image/todos.svg";
import { useHistory } from "react-router-dom";
import NavItem from "./NavItem";

export default function Nav({ setRender }) {
  const history = useHistory();
  const handleClick = (e) => {
    if (e.target.id === "account") setRender("account");
    if (e.target.id === "todos") setRender("todos");
    // else {
    //   localStorage.removeItem("AuthToken");
    //   history.push("/login");
    // }
  };
  return (
    <List width="100%" fontSize="14px">
      <NavItem image={todos} handleClick={handleClick} text='todos'  active={true} />
      <NavItem image={account} handleClick={handleClick} text='account' active={false}   />
    </List>
  );
}
