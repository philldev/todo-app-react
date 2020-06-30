import React from "react";
import "./App.css";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
