import React from "react";
import { Box, Editable, EditablePreview, EditableInput } from "@chakra-ui/core";

export default function AccountDetails() {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent='space-between'>
      
      <Editable border={`1px solid gray`} borderRadius='4px' py='14px' px='16px' defaultValue="username" width='49%'>
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable border={`1px solid gray`} borderRadius='4px' py='14px' px='16px' defaultValue="username" width='49%'>
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable border={`1px solid gray`} borderRadius='4px' py='14px' px='16px' defaultValue="username" width='49%'>
        <EditablePreview />
        <EditableInput />
      </Editable>
      
    </Box>
  );
}
