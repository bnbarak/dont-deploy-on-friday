import styled from "styled-components";

export const QuestionStyle = styled.div`
  padding: ${props => props.theme.spaceX4} 0;
  text-align: center;
  font-size: 85%;
  height: 100px;

  @media only screen and (max-width: 600px) {
    height: 180px;
  }
`;

export const FridayStyle = styled.span`
  font-family: "Nova Mono", monospace;
  color: ${props => props.theme.fridayColor};
  font-size: 28px;
  font-weight: bold;
`;
