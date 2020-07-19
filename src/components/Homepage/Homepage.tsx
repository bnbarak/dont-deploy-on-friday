import React from "react";
import { DontStyle, HomepageStyle } from "./Homepage.styles";
import { Question } from "../Question";
import { Answer } from "../Answers";

export const Homepage = () => {
  return (
    <HomepageStyle>
      <Question />
      <DontStyle>Don't</DontStyle>
      <Answer />
    </HomepageStyle>
  );
};
