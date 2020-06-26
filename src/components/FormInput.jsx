import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/core";

export default function FormInput({label, name, type, register}) {
  
  return (
    <FormControl mb='1rem'>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input ref={register({required:true})} type={type} id={name} name={name} />
    </FormControl>
  );
}
