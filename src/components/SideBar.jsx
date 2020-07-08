import { Avatar, Flex, Image, IconButton } from "@chakra-ui/core";
import React, { useContext, useRef, useState } from "react";
import avatar from "../assets/image/Avatar.svg";
import logoSmall from "../assets/logosmall.svg";
import { UserContext } from "../Context/UserContext";
import Nav from "./Nav";
import useOutsideClick from "../customHooks/useOutsideClick";
import Loading from "./Loading";

export default function SideBar({ setRender, render }) {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const ref = useRef();
  useOutsideClick(ref, () => {
    setIsOpen(false);
  });
  return (
    <Flex
      ref={ref}
      zIndex="1"
      position="fixed"
      left="0"
      top="0"
      direction="column"
      width={{ base: isOpen ? "170px" : "75px", lg: "170px" }}
      backgroundColor="#121A21"
      px="20px"
      height="100vh"
      transition="all .3s ease-out"
    >
      <IconButton
        display={{ base: "block", lg: "none" }}
        backgroundColor="inherit"
        variantColor="orange"
        aria-label="Send email"
        icon="arrow-right"
        size="sm"
        mt="15px"
        ml="auto"
        transform={isOpen ? "rotate(180deg)" : ""}
        transition="transform .3s ease-out"
        onClick={handleOpen}
        _focus={{ outline: "none" }}
      />
      <Image src={logoSmall} mt="20px" mb="50px" />
      {user ? (
        <>
          {" "}
          <Avatar
            size={{ base: "sm", lg: "sm" }}
            name="Prosper Otemuyiwa"
            src={user.imageUrl !== "" ? user.imageUrl : avatar}
            mb="30px"
            mx="auto"
          />
          <Nav setRender={setRender} render={render} isOpen={isOpen} />{" "}
        </>
      ) : (
        <Loading />
      )}
    </Flex>
  );
}
