import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/core";

export default function FormInput({label, name, type, register, required}) {
  
  return (
    <FormControl mb='1rem'>
      <FormLabel htmlFor={name}>{label}{required ? ' *' : ''}</FormLabel>
      <Input color='gray.800' ref={register({required:true})} type={type} id={name} name={name} isRequired={required} />
    </FormControl>
  );
}
