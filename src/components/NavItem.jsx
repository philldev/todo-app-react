import { Image, ListItem, Text, Icon } from "@chakra-ui/core";
import React from "react";

export default function NavItem({ handleClick, image, text, active, isOpen }) {
  return (
    <ListItem
      backgroundColor={active ? "#F65A18" : "#1E2B39"}
      py="3px"
      display="flex"
      onClick={handleClick}
      id={text}
      pl="5px"
      mb="10px"
      cursor="pointer"
    >
      <Image cursor="pointer" src={image} mr="1rem" />
      <Text
        transition="all .1s ease-out"
        opacity={{ base: isOpen ? "1" : "0", lg: "1" }}
        transform={{base: isOpen ? "translateX(0)" : "translateX(-50px)", lg: "scale(1)" }}
        
        display='block'
      >
        {text}
      </Text>
    </ListItem>
  );
}
