import React from "react";
import { Box, Input, Checkbox, Icon, Flex, Text } from "@chakra-ui/core";
import { theme } from "../../utils.js/theme";

export default function Todo({ todo, handleDelete, toggleCompleted }) {
  const handleClick = () => {
    handleDelete(todo.todoId);
  };

  const handleChange = () => {
    toggleCompleted(todo.todoId);
    console.log(todo);
  };

  return (
    <Box
      py="12px"
      backgroundColor="inherit"
      borderRadius="60px"
      mb="15px"
      display="flex"
      justifyContent="space-between"
    >
      <Flex>
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
      <Flex>
        <Icon
          color="red.300"
          float="right"
          name="delete"
          size="16px"
          cursor='pointer'
          onClick={handleClick}
        />
      </Flex>
    </Box>
  );
}
