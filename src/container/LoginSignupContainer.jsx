import React from "react";
import { Image, Flex } from "@chakra-ui/core";
import logoBig from "../assets/logobig.svg";
import logo from "../assets/logosmall.svg";

export default function LoginSignupContainer({ children }) {
  return (
    <Flex>
      <Flex
        px="40px"
        backgroundColor="#1E2B39"
        flexDirection="column"
        justifyContent="center"
        width="400px"
        height="100vh"
        flexShrink="0"
      >
        <Image src={logo} mb="20px" />

        {children}
      </Flex>
      <Image
        mx="auto"
        display={{ base: "none", lg: "block" }}
        width="400px"
        src={logoBig}
      />
    </Flex>
  );
}
