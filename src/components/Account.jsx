import React, { useState, useContext } from "react";
import { Box, Heading, Button, Divider, Input, Spinner } from "@chakra-ui/core";
import AccountDetails from "./AccountDetails";
import { theme } from "../utils.js/theme";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../Context/UserContext";

export default function Account({ profile }) {
  const {user} = useContext(UserContext)

  const { register, handleSubmit} = useForm();

  
  const [state, setState] = useState({
    loading: false,
  });
  
  const history = useHistory();
  
  const onSubmit = data => {
    console.log(data)
    setState({ loading: true });
    const authToken = localStorage.getItem("AuthToken");
    Axios.defaults.headers.common = { Authorization: `${authToken}` };
		const formRequest = {
			firstName: data.firstName,
			lastName: data.lastName,
			country: data.country
		};
		Axios
			.post('/user', formRequest)
			.then(() => {
				setState({ loading: false });
			})
			.catch((error) => {
				if (error.response.status === 403) {
					history.push('/login');
				}
				console.log(error);
				setState({
					loading: false
				});
			});

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
      <Heading mb="1rem">{user.username}</Heading>
      <Box display="flex">
        <Button
          type="submit"
          border={`1px solid ${theme.primaryColor}`}
          color={theme.primaryColor}
          onClick={profilePictureHandler}
        >
          {state.loading ? <Spinner/> : 'Upload Photo'} 
        </Button>
        <Input type="file" backgroundColor='inherit' border='none' display="inline" onChange={handleImageChange} />
      </Box>

      <Divider borderColor="gray" my="1rem" />

      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <AccountDetails profile={user} register={register} />

        <Divider borderColor="gray" my="1rem" />

        <Button
          type="submit"
          border={`1px solid ${theme.primaryColor}`}
          backgroundColor={theme.primaryColor}
          color="white"
        >
           {state.loading ? <Spinner/> : 'Save details'} 
          
        </Button>
      </Box>
    </Box>
  );
}
