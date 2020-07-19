import styled from "styled-components";

export const QuestionStyle = styled.div`
  padding: ${props => props.theme.spaceX4} 0;
  text-align: center;
  line-height: 44px;
`;

export const FridayStyle = styled.span`
  font-family: "Nova Mono", monospace;
  color: ${props => props.theme.fridayColor};
  font-size: 34px;
  font-weight: bold;
`;
