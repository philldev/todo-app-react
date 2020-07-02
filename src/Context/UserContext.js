import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import fetchUser from "../utils.js/fetchUser";
import fetchTodos from "../utils.js/fetchTodos";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useHistory();
  
  useEffect(() => {
    const authToken = localStorage.getItem("AuthToken");
    if (authToken === null) {
      history.push("/login");
    }
  }, [history])
  
  useEffect(() => {
    setLoading(true)
    fetchUser(setLoading, setUser, history)
    fetchTodos(setTodos)

    return () => {
      
    }
    
  }, [history]);

  const value = {
    user,
    todos,
    loading
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
