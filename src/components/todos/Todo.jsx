import { Box, Checkbox, Flex, Icon, Text, ListItem } from "@chakra-ui/core";
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
      _hover={{transform:'translateY(-5px)'}}
      transition='transform .2s ease-out'
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
        <Icon
          color="red.300"
          float="right"
          name="delete"
          size="16px"
          cursor='pointer'
          onClick={handleClick}
        />
      </Box>
    </ListItem>
  );
}
