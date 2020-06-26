import React from "react";
import "./App.css";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <div>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
