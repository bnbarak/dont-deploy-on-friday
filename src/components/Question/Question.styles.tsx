import styled from "styled-components";

export const QuestionStyle = styled.div`
  padding: ${props => props.theme.spaceX4} 0;
  text-align: center;
  line-height: 40px;
  font-size: 85%;
  height: 100px;
  color
`;

export const FridayStyle = styled.span`
  font-family: "Nova Mono", monospace;
  color: ${props => props.theme.fridayColor};
  font-size: 34px;
  font-weight: bold;
`;
