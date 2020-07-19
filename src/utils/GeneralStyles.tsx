import styled from "styled-components";

export const ButtonStyle = styled.button`
  color: ${props => props.theme.mainColor};
  padding: ${props => props.theme.spaceX1};
  font-size: ${props => props.theme.smallFontSize};
  background: unset;
  border: unset;
  outline: unset;
  border-bottom: 1px solid transparent;
  font-weight: 200;

  &:hover {
    border-color: ${props => props.theme.fridayColor};
    cursor: pointer;
  }
`;


export const LinkStyle = styled.a`
    text-decoration: unset;
`
