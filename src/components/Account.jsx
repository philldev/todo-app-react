import React, { useState } from "react";
import { Box, Heading, Button, Divider, Input, Spinner } from "@chakra-ui/core";
import AccountDetails from "./AccountDetails";
import { theme } from "../utils.js/theme";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Account({ profile }) {

  const { register, handleSubmit} = useForm();

  
  const [state, setState] = useState({
    loading: false,
  });
  
  const history = useHistory();
  
  const onSubmit = data => {
    const authToken = localStorage.getItem("AuthToken");
    

  }
  const handleImageChange = (e) => {
    setState({ ...state, image: e.target.files[0] });

  };

  const profilePictureHandler = (e) => {
    e.preventDefault();
    setState({
      ...state,
      loading: true,
    });
    const authToken = localStorage.getItem("AuthToken");
    let form_data = new FormData();
    form_data.append("image", state.image);
    Axios.defaults.headers.common = { Authorization: `${authToken}` };
    Axios.post("/user/image", form_data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.status === 403) {
          history.push("/login");
        }
        console.log(error);
        setState({
          ...state,
          loading: false,
        });
      });
  };

  return (
    <Box ml="135px" width="875px">
      <Heading mb="1rem">{profile.username}</Heading>
      <Box display="flex">
        <Button
          type="submit"
          border={`1px solid ${theme.primaryColor}`}
          color={theme.primaryColor}
          onClick={profilePictureHandler}
        >
          {state.loading ? <Spinner/> : 'Upload Photo'} 
        </Button>
        <Input type="file" display="inline" onChange={handleImageChange} />
      </Box>

      <Divider borderColor="gray" my="1rem" />

      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <AccountDetails profile={profile} register={register} />

        <Divider borderColor="gray" my="1rem" />

        <Button
          type="submit"
          border={`1px solid ${theme.primaryColor}`}
          backgroundColor={theme.primaryColor}
          color="white"
        >
          Save details
        </Button>
      </Box>
    </Box>
  );
}
