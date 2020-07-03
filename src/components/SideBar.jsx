import React, { useContext } from "react";
import { Box, Image, Flex, Avatar } from "@chakra-ui/core";
import Nav from "./Nav";
import { UserContext } from "../Context/UserContext";
import logoSmall from "../assets/logosmall.svg";
import avatar from "../assets/image/Avatar.svg";

export default function SideBar({ profilePicture, username, setRender }) {
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
