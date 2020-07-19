import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: unset;
  padding: ${props => props.theme.spaceX1};
  font-size: ${props => props.theme.buttonFontSize};
  border: unset;
  outline: unset;
  border-bottom: 1px solid transparent;
  font-weight: 200;

  &:hover {
    border-color: ${props => props.theme.borderColor};
    cursor: pointer;
  }
`;
