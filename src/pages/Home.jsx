import { Box } from "@chakra-ui/core";
import React, { useState } from "react";
import Account from "../components/Account";
import SideBar from "../components/SideBar";
import Todos from "../components/todos/Todos";

export default function Home() {
  const [render, setRender] = useState("todos");

  return (
    <Box display="flex" as="main">
      <SideBar setRender={setRender} render={render} />
      {render === "todos" ? <Todos /> : <Account />}
    </Box>
  );
}
