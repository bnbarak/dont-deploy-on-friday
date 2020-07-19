import React from "react";
import { AppStyle } from "./App.styles";
import { Homepage } from "../Homepage";
import { ThemeContext } from "../../contextProviders/ThemeContext";
import { Header } from "../Header";

export const App = () => {
  return (
    <ThemeContext>
      <AppStyle>
        <Header />
        <Homepage />
      </AppStyle>
    </ThemeContext>
  );
};
