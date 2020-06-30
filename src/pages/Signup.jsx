import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Box, Heading, FormControl, Button, Spinner, Alert, AlertIcon } from "@chakra-ui/core";
import FormInput from "../components/FormInput";
import { signupField } from "../utils.js/formField";
import Axios from "axios";

export default function Signup() {
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
      loading: false,
    });
    
    if (data.password !== data.confirmPassword) {
      setState({
        ...state,
        errors: [...state.errors, 'Password is not equal'],
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
			confirmPassword: data.confirmPassword
		};
		Axios
			.post('/signup', newUserData)
			.then((response) => {
        console.log(response);
				localStorage.setItem('AuthToken', `${response.data.token}`);
				setState({ 
					loading: false,
				});	
				history.push('/');
			})
			.catch((error) => {
        console.log(error.response.data.username);
				// setState({
				// 	errors: error.response.data,
				// 	loading: false
				// });
			});
  };
  return (
    <Box mx="auto" maxW="500px" as="form" onSubmit={handleSubmit(onSubmit)}>
      <Heading textAlign="center">Sign Up</Heading>
      {signupField.map((f, i) => (
        <FormInput
          key={i}
          type={f.type}
          name={f.name}
          label={f.label}
          register={register}
          required={f.required}
        />
      ))}
      <FormControl mb="1rem" textAlign="center">
        <Button type="submit" backgroundColor="blue.500" color="white">
          {state.loading ? <Spinner /> : "Signup"}
        </Button>
      </FormControl>
      {/* {state.errors.length > 0 && (
        <Alert status="error">
          <AlertIcon />
          {state.errors}
        </Alert>
      )} */}
    </Box>
  );
}
