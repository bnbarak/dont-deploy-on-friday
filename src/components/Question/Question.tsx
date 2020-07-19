import React from "react";
import { QuestionStyle } from "./Question.styles";
import { questions } from "../../db/questions.json";
import { renderTextWithFriday } from "../../utils/helperFunctions";

const numOfQuestions = questions.length;

interface QuestionType {
  text: string;
  id: string;
}

export const Question = () => {
  const randomQuestionIndex = Math.floor(Math.random() * numOfQuestions);

  const randomQuestion: QuestionType = questions[randomQuestionIndex];

  return (
    <QuestionStyle>{renderTextWithFriday(randomQuestion.text)}</QuestionStyle>
  );
};
