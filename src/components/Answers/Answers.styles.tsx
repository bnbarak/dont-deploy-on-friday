import styled from "styled-components";

export const AnswersStyle = styled.div`
  text-align: center;
  padding: 30px;
  color: ${props => props.theme.secondaryColor};
  min-height: 100px;

  @media only screen and (max-width: 600px) {
  }
`;

export const QuotationStyle = styled.span`
  font-size: 140%;
  line-height: 30px;
  font-weight: bold;
`;

export const AnswerImageStyle = styled.img`
  height: 300px;

  @media only screen and (max-width: 600px) {
    height: 500px;
  }
`;

export const AnswerImageCredit = styled.a`
    font-style: italic;
    text-decoration: none;
    font-size: 19px;
    color: dimgrey;
}`;
