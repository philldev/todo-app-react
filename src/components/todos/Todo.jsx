import React from "react";
import { Box, Input, Checkbox, Icon, Flex } from "@chakra-ui/core";
import { theme } from "../../utils.js/theme";

export default function Todo({ todo, handleDelete, toggleCompleted }) {
  const handleClick = () => {
    handleDelete(todo.todoId);
  };

  const handleChange = () => {
    toggleCompleted(todo.todoId)
    console.log(todo)
  };
  
  return (
    <Box
      py="12px"
      backgroundColor="inherit"
      border={`1px solid ${theme.primaryColor}`}
      borderRadius="60px"
      px="40px"
      color="gray.100"
      mb="15px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Checkbox
        variantColor="blue"
        borderColor={theme.primaryColor}
        isChecked={todo.completed}
        onChange={handleChange}
        textDecor={todo.completed ? 'line-through' : ''}
      >
        {todo.body}
      </Checkbox>{" "}
      <Flex>
        <Icon
          color="red.300"
          float="right"
          name="delete"
          size="16px"
          onClick={handleClick}
        />
      </Flex>
    </Box>
  );
}
