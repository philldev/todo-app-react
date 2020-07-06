import {
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/core";
import React from "react";

export default function FormInput({
  label,
  name,
  type,
  register,
  required,
  value,
  errors,
  validation
}) {
  return (
    <FormControl mb="1rem">
      <FormLabel htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </FormLabel>
      <Input
        defaultValue={value && value}
        color="white"
        backgroundColor="#25313C"
        border="none"
        ref={register && register(validation)}
        type={type}
        id={name}
        name={name}
        isRequired={required}
      />
      {errors && errors[name] ? (
        <Alert status="error" backgroundColor="inherit" color="red.300" fontSize='12px'>
          <AlertIcon />
          {errors[name] && errors[name].type === "required" && (
            <span>{label} is required</span>
          )}
          {errors[name] && errors[name].type === "maxLength" && (
            <span>Max length exceeded</span>
          )}
          {errors[name] && errors[name].type === "minLength" && (
            <span>your {label} is too short! must be more than {validation.minLength}</span>
          )}
        </Alert>
      ) : null}
    </FormControl>
  );
}
