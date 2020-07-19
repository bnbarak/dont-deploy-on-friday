import React, { useState } from "react";
import {
  AnswerImageCredit,
  AnswerImageStyle,
  AnswersStyle,
  QuotationStyle
} from "./Answers.styles";
import { answers } from "../../db/answers.json";
import { renderTextWithFriday } from "../../utils/helperFunctions";
import { type } from "os";

const numOfAnswers = answers.length;

enum AnswerTypeEnum {
  text = "text",
  image = "image"
}

interface AnswerType {
  type: AnswerTypeEnum | string;
  content: string;
  info?: string;
}

export const Answer = () => {
  const randomAnswerIndex = Math.floor(Math.random() * numOfAnswers);
  const randomAnswer: AnswerType = answers[randomAnswerIndex];

  const renderText = () => renderTextWithFriday(randomAnswer.content);

  const renderImage = () => {
    const imgSrc = `/images/dont-deploy-on-friday-${randomAnswer.content}`;
    return [
      <AnswerImageStyle src={imgSrc} key={1} />,
      <div key={2}>
        <AnswerImageCredit href={randomAnswer.info}>Credit</AnswerImageCredit>
      </div>
    ];
  };

  const renderAnswer = () => {
    if (randomAnswer) {
      const { type } = randomAnswer;
      if (type === AnswerTypeEnum.text) {
        return renderText();
      } else if (type === AnswerTypeEnum.image) {
        return renderImage();
      }
    } else {
      return <div>Error finding your answer, sorry</div>;
    }
  };

  return <AnswersStyle>{renderAnswer()}</AnswersStyle>;
};
