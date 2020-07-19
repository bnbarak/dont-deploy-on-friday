import { FridayStyle } from "../components/Question/Question.styles";
import React from "react";

export const renderTextWithFriday = (text: string) => {
  if (text.includes("Friday")) {
    const [partA, partB] = text.split("Friday");
    return [
      <span key={1}>{partA}</span>,
      <FridayStyle key={2}>Friday</FridayStyle>,
      <span key={3}>{partB}</span>
    ];
  }

  return text;
};
