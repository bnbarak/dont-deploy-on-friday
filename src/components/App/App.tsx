import React from "react";
import { AppStyle } from "./App.styles";
import { Homepage } from "../Homepage";
import { ThemeContext } from "../../contextProviders/ThemeContext";
import { Header } from "../Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { MoreInfo } from "../MoreInfo/MoreInfo";

export const App = () => {
  return (
    <ThemeContext>
      <AppStyle>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/about">
              <MoreInfo />
            </Route>
          </Switch>
        </Router>
      </AppStyle>
    </ThemeContext>
  );
};
