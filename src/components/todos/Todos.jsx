import { Flex, Spinner } from "@chakra-ui/core";
import React, { useContext } from "react";
import MainContainer from "../../container/MainContainer";
import { UserContext } from "../../Context/UserContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todos() {
  const {todos, todosHandler, loading } = useContext(UserContext)

  return (
    <MainContainer title="Todos">
      {loading ? (
        <Flex width='100%' height='100%' justifyContent='center' alignItems='center'>
          <Spinner />
        </Flex>
      ) : (
        <>
          {" "}
          <TodoForm handleSubmit={todosHandler.handleSubmit} />
          <TodoList
            todos={todos}
            toggleCompleted={todosHandler.toggleCompleted}
            handleDelete={todosHandler.handleDelete}
          />
          
          {" "}
        </>
      )}
    </MainContainer>
  );
}
