import React from "react";
import { ThemeProvider } from "styled-components";

const basePadding = 10;

interface Theme {
  appWidth: string;
  fontSize: string;
  smallFontSize: string;
  mainColor: string;
  borderColor: string;
  spaceX1: string;
  spaceX2: string;
  spaceX3: string;
  spaceX4: string;
  fridayColor: string;
  secondaryColor: string;
}

interface ThemeProviderProps {
  children: JSX.Element;
}

const theme: Theme = {
  appWidth: "1024px",
  fontSize: "28px",
  smallFontSize: "24px",
  mainColor: "#fff",
  borderColor: "red",
  fridayColor: "#e600e8",
  secondaryColor: "#cccccc",
  spaceX1: `${basePadding * 1}px`,
  spaceX2: `${basePadding * 2}px`,
  spaceX3: `${basePadding * 3}px`,
  spaceX4: `${basePadding * 4}px`
};

export const ThemeContext = (props: ThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
