import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/core";
import Axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import avatar from "../assets/image/Avatar.svg";
import MainContainer from "../container/MainContainer";
import { UserContext } from "../Context/UserContext";
import FormInput from "./FormInput";

export default function Account({ profile }) {
  const { user } = useContext(UserContext);

  const { register, handleSubmit } = useForm();

  const [state, setState] = useState({
    loading: false,
  });

  const history = useHistory();

  const onSubmit = (data) => {
    setState({ loading: true });
    const authToken = localStorage.getItem("AuthToken");
    Axios.defaults.headers.common = { Authorization: `${authToken}` };
    const formRequest = {
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
    };
    Axios.post(
      "https://us-central1-todoapp-fb5c3.cloudfunctions.net/api/user",
      formRequest
    )
      .then(() => {
        setState({ loading: false });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          history.push("/login");
        }
        console.log(error);
        setState({
          loading: false,
        });
      });
  };

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
    console.log(state.image)
    form_data.append("image", state.image);
    Axios.defaults.headers.common = { Authorization: `${authToken}` };
    Axios.post(
      "http://localhost:5000/todoapp-fb5c3/us-central1/api/user/image",
      form_data,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.status === 403) {
          history.push("/login");
        }
        console.log(error.response.data);
        setState({
          ...state,
          loading: false,
        });
      });
  };


    
  return (
    <MainContainer title={user.username}>
      <Divider borderColor="gray" my="1rem" />
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="First Name"
          value={user.firstName}
          name="firstName"
          register={register}
          type="text"
          required={false}
        />
        <FormInput
          label="Last Name"
          value={user.lastName}
          name="lastName"
          register={register}
          type="text"
          required={false}
        />
        <FormInput
          label="username"
          value={user.username}
          name="username"
          register={register}
          type="text"
          required={false}
        />
        <Button
          type="submit"
          border={`1px solid #F65A18`}
          backgroundColor="#F65A18"
          color="white"
        >
          {state.loading ? <Spinner /> : "Update Details"}
        </Button>
      </Box>
        <Divider borderColor="gray" my="1rem" />
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Text mb="10px">{user.email}</Text>
        <Button
          border={`1px solid #BBC8D4`}
          backgroundColor="inherit"
          color="#BBC8D4"
        >
          {state.loading ? <Spinner /> : "Reset email"}
        </Button>
      </FormControl>

      <Divider borderColor="gray" my="1rem" />

      <Box display="flex">
        <FormControl>
          <FormLabel display="block">Photo</FormLabel>
          <Avatar
            size="lg"
            name="Prosper Otemuyiwa"
            src={user.imageUrl !== "" ? user.imageUrl : avatar}
            mb="10px"
            mx="auto"
          />
          <Flex direction={{ base: "column", lg: "row" }}>
            <Button
              type="submit"
              border={`1px solid #BBC8D4`}
              backgroundColor="inherit"
              color="#BBC8D4"
              onClick={profilePictureHandler}
            >
              {state.loading ? <Spinner /> : "Upload Photo"}
            </Button>
            <Input
              type="file"
              name='image'
              backgroundColor="inherit"
              border="none"
              display="inline"
              onChange={handleImageChange}
            />
          </Flex>
        </FormControl>
      </Box>

      <Divider borderColor="gray" my="1rem" />
    </MainContainer>
  );
}
