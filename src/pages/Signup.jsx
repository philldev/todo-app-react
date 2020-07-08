import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  FormControl,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/core";
import Axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useHistory } from "react-router-dom";
import FormInput from "../components/FormInput";
import LoginSignupContainer from "../container/LoginSignupContainer";
import { signupField } from "../utils.js/formField";

export default function Signup() {
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

    if (data.password !== data.confirmPassword) {
      setState({
        ...state,
        errors: [...state.errors, "Password is not equal"],
        loading: false,
      });
    }

    const newUserData = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      country: data.country,
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    Axios.post("https://us-central1-todoapp-fb5c3.cloudfunctions.net/api/signup", newUserData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("AuthToken", `${response.data.token}`);
        console.log(response.data.token)
        setState({ ...state,
          loading: false,
        });
        history.push("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        setState({
        	errors: error.response.data,
        	loading: false
        });
      });
  };

  console.log(errors)
  return (
    <LoginSignupContainer>
      <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
        {signupField.map((f, i) => (
          <FormInput
            key={i}
            type={f.type}
            name={f.name}
            label={f.label}
            register={register}
            validation={f.validation}
            errors={errors}
          />
        ))}

        <Checkbox ref={register({required:true})}>Agree. Terms & conditions</Checkbox>

        <FormControl mb="1rem" textAlign="center">
          <Button
            type="submit"
            backgroundColor="#F65A18"
            color="white"
            mt="40px"
            py="8px"
            fontSize="14px"
            display="block"
            width="100%"
            _hover={{backgroundColor:'#F65A18'}}
          >
            {state.loading ? <Spinner /> : "Sign Up"}
          </Button>
        </FormControl>

        <Text>
          Have an account?{" "}
          <Link as={RouterLink} color='green.100' to="/login">
            Click here.
          </Link>{" "}
        </Text>
        {state.errors.length > 0 && (
          <Alert status="error" backgroundColor="inherit" color="red.300" fontSize='12px'>
            <AlertIcon />
            {state.errors}
          </Alert>
        )}
      </Box>
    </LoginSignupContainer>
  );
}
