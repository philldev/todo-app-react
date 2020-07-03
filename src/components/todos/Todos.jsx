import { Spinner } from "@chakra-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import MainContainer from "../../container/MainContainer";
import fetchTodos from "../../utils.js/fetchTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.body.value);
    if (e.target.body.value.trim()) {
      let options = {
        url: "/todo",
        method: "post",
        data: { body: e.target.body.value, completed: false },
      };
      const authToken = localStorage.getItem("AuthToken");
      Axios.defaults.headers.common = { Authorization: `${authToken}` };
      Axios(options)
        .then((response) => {
          console.log(response.data);
          setTodos((t) => (t = [response.data, ...t]));
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    e.target.body.value = "";
  };

  const toggleCompleted = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.todoId === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
    let todo = todos.find((todo) => todo.todoId === id);
    let options = {
      url: `/todo/${id}`,
      method: "put",
      data: { ...todo, completed: !todo.completed },
    };
    const authToken = localStorage.getItem("AuthToken");
    Axios.defaults.headers.common = { Authorization: `${authToken}` };
    Axios(options)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log("fail");
      });
  };

  const handleDelete = (id) => {
    const authToken = localStorage.getItem("AuthToken");
    Axios.defaults.headers.common = { Authorization: `${authToken}` };
    let todoId = id;
    Axios.delete(`todo/${todoId}`)
      .then(() => {
        setTodos((todos) => todos.filter((todo) => todo.todoId !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let source = Axios.CancelToken.source();
    fetchTodos(setTodos, setLoading, source);
    return () => {
      source.cancel()
    }
  }, []);


  return (
    <MainContainer title='Todos'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <TodoForm handleSubmit={handleSubmit} />
          <TodoList
            todos={todos}
            toggleCompleted={toggleCompleted}
            handleDelete={handleDelete}
          />{" "}
        </>
      )}
    </MainContainer>
  );
}
