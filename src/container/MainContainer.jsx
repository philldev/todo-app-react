import React from "react";
import { Box, Heading } from "@chakra-ui/core";

export default function MainContainer({children, title}) {
  return (
    <Box zIndex='0' ml={{base:'75px', lg:'170px'}} px={{base:'15px', lg:'90px'}} pt={{base:'15px', lg:'60px'}} backgroundColor="#1E2B39" width="100%" minHeight='100vh'>
      <Heading fontSize="50px">{title}</Heading>
    {children}

    </Box>
  );
}
