import { Box, Spinner } from "@chakra-ui/core";
import React, { useContext, useState } from "react";
import Account from "../components/Account";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { UserContext } from "../Context/UserContext";
import Todos from "../components/todos/Todos";

export default function Home() {
  const {loading} = useContext(UserContext)
  const [render, setRender] =useState('todos')
 

  return (
    <Box>
      <Navbar />
        <Box display="flex" as="main" pl="30px" pt="30px">
          <SideBar setRender={setRender} />
          {render === 'todos' ?  <Todos/> : <Account />}          
        </Box>
    </Box>
  );
}
