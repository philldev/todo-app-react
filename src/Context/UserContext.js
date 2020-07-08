import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import fetchUser from "../utils.js/fetchUser";
import fetchTodos from "../utils.js/fetchTodos";
import uniqid from "uniqid";
import Axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (data) => {
    

    if (data.body) {
      let newTodo = {
        body: data.body,
        id: uniqid("todo-"),
        completed: false,
      };

      setTodos((todos) => (todos = [...todos, newTodo]));

      let options = {
        url: "/todo",
        method: "post",
        data: newTodo,
      };
      const authToken = localStorage.getItem("AuthToken");
      Axios.defaults.headers.common = { Authorization: `${authToken}` };
      Axios(options)
        .then((response) => {
          //todo
          // setTodos((todos) => {
          //  newTodo.id = response.data.todoId
          //  return todos = [newTodo , ...todos]
          // })
        })
        .catch((error) => {
          //todo
        });
    }
  };

  const toggleCompleted = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
    let todo = todos.find((todo) => todo.id === id);
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
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    Axios.defaults.headers.common = { Authorization: `${authToken}` };
    let todoId = id;
    Axios.delete(`todo/${todoId}`)
      .then(() => {
        console.log("successfully deleted a todo");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const authToken = localStorage.getItem("AuthToken");
    if (authToken === null) {
      history.push("/login");
    }
  }, [history]);

  useEffect(() => {
    let source = Axios.CancelToken.source();
    setLoading(true);
    fetchUser(setLoading, setUser, history, source);
    fetchTodos(setTodos, setLoading, source);
    return () => {
      source.cancel();
    };
  }, [history]);

  const value = {
    user,
    loading,
    todos,
    todosHandler: {
      handleSubmit,
      toggleCompleted,
      handleDelete,
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
