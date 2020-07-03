import React from "react";
import { Box, Heading } from "@chakra-ui/core";

export default function MainContainer({children, title}) {
  return (
    <Box px="90px" pt="60px" backgroundColor="#1E2B39" width="100%">
      <Heading fontSize="50px">{title}</Heading>
    {children}

    </Box>
  );
}
