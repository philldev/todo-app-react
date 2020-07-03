import { Avatar, Flex, Image } from "@chakra-ui/core";
import React, { useContext } from "react";
import avatar from "../assets/image/Avatar.svg";
import logoSmall from "../assets/logosmall.svg";
import { UserContext } from "../Context/UserContext";
import Nav from "./Nav";

export default function SideBar({ setRender }) {
  const { user } = useContext(UserContext);
  return (
    <Flex direction="column" width="300px" minW='200px' backgroundColor="#121A21" px='20px' height='100vh'>
      <Image src={logoSmall} mt="20px" mb="50px" />
      <Avatar
        size="lg"
        name="Prosper Otemuyiwa"
        src={user.imageUrl !== "" ? user.imageUrl : avatar}
        mb='30px'
        mx='auto'
      />
      <Nav setRender={setRender} />
    </Flex>
  );
}
