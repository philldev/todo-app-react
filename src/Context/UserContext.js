import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import fetchUser from "../utils.js/fetchUser";
import fetchTodos from "../utils.js/fetchTodos";
import Axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false)
  const history = useHistory();
  
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

    return () => {
      source.cancel()
    }
    
  }, [history]);

  console.log('render')

  const value = {
    user,
    loading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
