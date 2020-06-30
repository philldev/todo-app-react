import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Box, Spinner } from "@chakra-ui/core";
import Account from "../components/Account";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function Home() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    profilePicture: "",
    uiLoading: true,
    imageLoading: false,
  });
  const history = useHistory();

  useEffect(() => {
    const authToken = localStorage.getItem("AuthToken");
    if (authToken === null) {
      history.push("/login");
    }
    Axios.defaults.headers.common = { Authorization: `${authToken}` };
    Axios.get("/user")
      .then((response) => {
        console.log(response.data);
        setState({
          ...state,
          firstName: response.data.userCredentials.firstName,
          lastName: response.data.userCredentials.lastName,
          email: response.data.userCredentials.email,
          phoneNumber: response.data.userCredentials.phoneNumber,
          country: response.data.userCredentials.country,
          username: response.data.userCredentials.username,
          uiLoading: false,
          profilePicture: response.data.userCredentials.imageUrl,
        });
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 403) {
          history.push("/login");
        }
        // setState({ errorMsg: "Error in retrieving the data" });
      });
  }, []);

  return (
    <Box>
      <Navbar />
      {state.uiLoading ? (
        <Spinner />
      ) : (
        <Box display="flex" as="main" pl="30px" pt="30px">
          <SideBar profilePicture={state.profilePicture} username={state.username} />
          <Account profile={state} />
        </Box>
      )}
    </Box>
  );
}
