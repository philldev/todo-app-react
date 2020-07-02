import React from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/core";

export default function AccountDetails({ profile, register }) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <FormControl>
        <FormLabel htmlFor="firstName">First name</FormLabel>
        <Input
        color='gray.800'
          type="text"
          id="firstName"
          aria-describedby="email-helper-text"
          name="firstName"
          defaultValue={profile.firstName}
          ref={register}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="lastname">Last name</FormLabel>
        <Input
        color='gray.800'
          type="text"
          id="lastname"
          aria-describedby="email-helper-text"
          name="lastName"
          defaultValue={profile.lastName}
          ref={register}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
        color='gray.800'
          type="email"
          id="email"
          aria-describedby="email-helper-text"
          name="email"
          defaultValue={profile.email}
          ref={register}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
        <Input
        color='gray.800'
          type="number"
          id="phoneNumber"
          aria-describedby="email-helper-text"
          name="phoneNumber"
          defaultValue={profile.phoneNumber}
          ref={register}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="firstName">Username</FormLabel>
        <Input
        color='gray.800'
          type="text"
          id="username"
          aria-describedby="email-helper-text"
          name="username"
          defaultValue={profile.username}
          ref={register}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="country">Country</FormLabel>
        <Input
        color='gray.800'
          type="text"
          id="country"
          aria-describedby="email-helper-text"
          name="country"
          defaultValue={profile.country}
          ref={register}
        />
      </FormControl>
    </Grid>
  );
}
