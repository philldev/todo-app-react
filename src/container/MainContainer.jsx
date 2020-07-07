import React, { useContext } from "react";
import { Box, Heading } from "@chakra-ui/core";
import { UserContext } from "../Context/UserContext";
import Loading from "../components/Loading";

export default function MainContainer({children, title}) {
  const { user } = useContext(UserContext);
  return (
    <Box zIndex='0' ml={{base:'75px', lg:'170px'}} px={{base:'15px', lg:'90px'}} pt={{base:'15px', lg:'60px'}} backgroundColor="#1E2B39" width="100%" minHeight='100vh'>
      <Heading fontSize="50px">{title}</Heading>
      {user ? children : <Loading/>}
    

    </Box>
  );
}
