import { FormControl, FormLabel, Input } from "@chakra-ui/core";
import React from "react";

export default function FormInput({label, name, type, register, required, value}) {
  
  return (
    <FormControl mb='1rem'>
      <FormLabel htmlFor={name}>{label}{required ? ' *' : ''}</FormLabel>
      <Input defaultValue={value && value} color='white' backgroundColor='#25313C' border='none' ref={register && register({required:true})} type={type} id={name} name={name} isRequired={required} />
    </FormControl>
  );
}
