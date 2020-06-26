import React, { useState } from "react";
import {
  Box,
  Heading,
  Stack,
  Button,
  FormControl,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/core";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const FORM_DATA = [
  {
    type: "email",
    label: "Email",
    name: "email",
  },
  {
    type: "password",
    label: "Password",
    name: "password",
  },
];

export default function Login() {
  let history = useHistory();
  const [state, setState] = useState({
    errors: [],
    loading: false,
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setState({
      ...state,
      errors: [],
      loading: true,
    });
    const userData = {
      email: data.email,
      password: data.password,
    };

    Axios.post("/login", userData)
      .then((res) => {
        
        localStorage.setItem("AuthToken", `Bearer ${res.data.token}`);
        setState({
          ...state,
          loading: false,
        });
        history.push("/");
      })
      .catch((error) => {
        console.log(error)
        // setState({
        //   errors: error.response,
        //   loading: false,
        // });
      });
  };

  return (
    <Box mx="auto" maxW="500px" as="form" onSubmit={handleSubmit(onSubmit)}>
      <Heading textAlign="center">Login</Heading>
      {FORM_DATA.map((f, i) => (
        <FormInput
          key={i}
          type={f.type}
          name={f.name}
          label={f.label}
          register={register}
        />
      ))}

      <FormControl mb="1rem" textAlign="center">
        <Button type="submit" backgroundColor="blue.500" color="white">
          {state.loading ? <Spinner /> : "Login"}
        </Button>
      </FormControl>
      {state.errors && (
        <Alert status="error">
          <AlertIcon />
          {state.errors}
        </Alert>
      )}
    </Box>
  );
}
