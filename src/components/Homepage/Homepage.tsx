import React from "react";
import { HomepageStyle } from "./Homepage.styles";
import { Question } from "../Question";
import { Answer } from "../Answers";

export const Homepage = () => {
  return (
    <HomepageStyle>
      <Question />
      <Answer />
    </HomepageStyle>
  );
};
