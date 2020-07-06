import React from "react";
import "./App.css";
import { CSSReset, ThemeProvider, Box, theme } from "@chakra-ui/core";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { UserProvider } from "./Context/UserContext";
const customIcons = {
  account: {
    path: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V18Z"
        fill="#6D7D8B"
      />
    ),
  },
  todos: {
    path: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 8C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6H20C20.55 6 21 6.45 21 7C21 7.55 20.55 8 20 8H4ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3.66667 18H14.3333C14.7 18 15 17.55 15 17C15 16.45 14.7 16 14.3333 16H3.66667C3.3 16 3 16.45 3 17C3 17.55 3.3 18 3.66667 18Z"
        fill="#6D7D8B"
      />
    ),
  },
  logout: {
    path: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V16C3 15.45 3.45 15 4 15C4.55 15 5 15.45 5 16V18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18V6C19 5.45 18.55 5 18 5H6C5.45 5 5 5.45 5 6V8C5 8.55 4.55 9 4 9C3.45 9 3 8.55 3 8V5C3 3.9 3.89 3 5 3ZM15.79 12.7L12.2 16.29C11.81 16.68 11.18 16.68 10.79 16.29C10.41 15.91 10.4 15.27 10.79 14.88L12.67 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H12.67L10.79 9.11C10.4 8.72 10.4 8.09 10.79 7.7C10.9768 7.51275 11.2305 7.40751 11.495 7.40751C11.7595 7.40751 12.0132 7.51275 12.2 7.7L15.79 11.29C16.18 11.68 16.18 12.31 15.79 12.7Z"
        fill="#6D7D8B"
      />
    ),
  },
};

const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Box
          as="div"
          minHeight="100vh"
          backgroundColor="gray.800"
          color="white"
        >
          <Switch>
            <Route exact path="/">
              <UserProvider>
                <Home />
              </UserProvider>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
