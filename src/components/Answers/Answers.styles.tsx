import styled from "styled-components";

export const AnswersStyle = styled.div`
  text-align: center;
  padding: 30px;
  // background: #ffffff5e;
  color: ${props => props.theme.secondaryColor};
  min-height: 100px;
`;

export const QuotationStyle = styled.span`
  font-size: 140%;
  line-height: 30px;
  font-weight: bold;
`;

export const AnswerImageStyle = styled.img`
  height: 300px;
`;

export const AnswerImageCredit = styled.a`
    font-style: italic;
    text-decoration: none;
    font-size: 19px;
    color: dimgrey;
}`;
