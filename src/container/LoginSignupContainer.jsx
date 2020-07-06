import React from "react";
import { Image, Flex } from "@chakra-ui/core";
import logoBig from "../assets/logobig.svg";
import logo from "../assets/logosmall.svg";

export default function LoginSignupContainer({ children }) {
  return (
    <Flex>
      <Flex
        px={{base:'25px', lg:"40px"}}
        py={{base:'40px', lg:"40px"}}
        backgroundColor="#1E2B39"
        flexDirection="column"
        justifyContent="center"
        width={{base:'100vw',lg:"400px"}}
        height="100vh"
        flexShrink="0"
      >
        <Image src={logo} my="25px" />

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
