import React from "react";
import "./App.css";
import { CSSReset, ThemeProvider, Box } from "@chakra-ui/core";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <ThemeProvider>
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
