import { List, Box } from "@chakra-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import account from "../assets/image/account.svg";
import todos from "../assets/image/todos.svg";
import logout from "../assets/image/logout.svg";
import NavItem from "./NavItem";

export default function Nav({ setRender }) {
  const history = useHistory();
  
  return (
    <List width="100%" fontSize="14px">
      <Box onClick={() => setRender("todos")}>
        <NavItem image={todos} text="todos" active={true} />
      </Box>

      <Box onClick={() => setRender("account")}>
        <NavItem image={account} text="account" active={false} />
      </Box>

      <Box
        onClick={() => {
          localStorage.removeItem("AuthToken");
          history.push("/login");
        }}
      >
        <NavItem image={logout} text="Logout" active={false} />
      </Box>
    </List>
  );
}
