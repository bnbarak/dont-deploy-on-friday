import React from "react";
import { FridayStyle, QuestionStyle } from "./Question.styles";
import { questions } from "../../db/questions.json";

const numOfQuestions = questions.length;

interface QuestionType {
  text: string;
  id: string;
}

const Friday = () => <FridayStyle>Friday</FridayStyle>;

export const Question = () => {
  const randomQuestionId = Math.floor(Math.random() * numOfQuestions);
  const randomQuestion: QuestionType = questions[randomQuestionId];
  const renderQuestion = () => {
    const { text } = randomQuestion;
    if (text.includes("Friday")) {
      const [partA, partB] = text.split("Friday");
      return [
        <span key={1}>{partA}</span>,
        <Friday key={2} />,
        <span key={3}>{partB}</span>
      ];
    }

    return text;
  };

  return <QuestionStyle>{renderQuestion()}</QuestionStyle>;
};
