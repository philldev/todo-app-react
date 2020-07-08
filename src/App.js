import { Box, CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./Context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
