import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import fetchUser from "../utils.js/fetchUser";
import fetchTodos from "../utils.js/fetchTodos";
import Axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

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
          setTodos((t) => (t = [response.data, ...t]));
        })
        .catch((error) => {
          //todo
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
    const authToken = localStorage.getItem("AuthToken");
    if (authToken === null) {
      history.push("/login");
    }
  }, [history])
  
  useEffect(() => {
    let source = Axios.CancelToken.source();
    setLoading(true)
    fetchUser(setLoading, setUser, history, source)
    fetchTodos(setTodos, setLoading, source)
    return () => {
      source.cancel()
    }
    
  }, [history]);

  const value = {
    user,
    loading,
    todos,
    todosHandler : {
      handleSubmit,
      toggleCompleted,
      handleDelete
    }
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
