import { Box, IconButton } from "@chakra-ui/core";
import React, { useState, useContext } from "react";
import Account from "../components/Account";
import SideBar from "../components/SideBar";
import Todos from "../components/todos/Todos";
import { UserContext } from "../Context/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);
  const [render, setRender] = useState("todos");

  console.log(user);

  if (!user) return null;

  return (
    <Box display="flex" as="main">
      <SideBar setRender={setRender} render={render} />
      {render === "todos" ? <Todos /> : <Account />}
    </Box>
  );
}
