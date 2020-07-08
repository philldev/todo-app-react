import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  Spinner,
  Text,
  Link,
} from "@chakra-ui/core";
import Axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useHistory } from "react-router-dom";
import FormInput from "../components/FormInput";
import LoginSignupContainer from "../container/LoginSignupContainer";
import { loginField } from "../utils.js/formField";

export default function Login() {
  let history = useHistory();
  const [state, setState] = useState({
    errors: [],
    loading: false,
  });
  const { register, errors, handleSubmit } = useForm();

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

    Axios.post("https://us-central1-todoapp-fb5c3.cloudfunctions.net/api/login", userData)
      .then((res) => {
        localStorage.setItem("AuthToken", `Bearer ${res.data.token}`);
        setState({
          ...state,
          loading: false,
        });
        history.push("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data.general) {
          setState({
            errors: error.response.data.general,
            loading: false,
          });
        }
      });
  };

  return (
    <LoginSignupContainer>
      <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
        {loginField.map((f, i) => (
          <FormInput
            key={i}
            type={f.type}
            name={f.name}
            label={f.label}
            register={register}
            errors={errors}
          />
        ))}

        <FormControl mb="1rem">
          <Button
            type="submit"
            backgroundColor="#F65A18"
            color="white"
            mt="40px"
            py="8px"
            fontSize="14px"
            display="block"
            width="100%"
          >
            {state.loading ? <Spinner /> : "Login"}
          </Button>
        </FormControl>
        <Text>
          Dont have an account?{" "}
          <Link as={RouterLink} to="/signup" color="green.100">
            Click here.
          </Link>{" "}
          Its free{" "}
        </Text>
        {state.errors.length > 0 && (
          <Alert status="error" backgroundColor='inherit' color='red.300'>
            <AlertIcon />
            {state.errors}
          </Alert>
        )}
      </Box>
    </LoginSignupContainer>
  );
}
