import { Box, Checkbox, Flex, IconButton, ListItem, Text } from "@chakra-ui/core";
import React from "react";

export default function Todo({ todo, handleDelete, toggleCompleted }) {
  const handleClick = () => {
    handleDelete(todo.id);
  };

  const handleChange = () => {
    toggleCompleted(todo.id);
  };

  return (
    <ListItem
      backgroundColor="inherit"
      mb="15px"
      display="flex"
      justifyContent="space-between"
      role='group'
    >
      <Flex alignItems='center'>
        <Checkbox
          variantColor="orange"
          color="gray.50"
          borderColor="gray.200"
          isChecked={todo.completed}
          onChange={handleChange}
        ></Checkbox>
        <Text
          fontSize="18px"
          pl="20px"
          textDecor={todo.completed ? "line-through" : ""}
        >
          {todo.body}
        </Text>
      </Flex>
      <Box display='flex' alignItems='center'>
        <IconButton
        backgroundColor='inherit'
        opacity='0'
          color="red.300"
          float="right"
          icon="delete"
          size="16px"
          cursor='pointer'
          onClick={handleClick}
          _hover={{backgroundColor:'inherit'}}
          _groupHover={{opacity:1}}
          transition='opacity .2s ease-in'
        />
      </Box>
    </ListItem>
  );
}
