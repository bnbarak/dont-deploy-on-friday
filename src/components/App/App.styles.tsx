import styled from "styled-components";

export const AppStyle = styled.div`
  height: 100vh;
  width: ${props => props.theme.appWidth};
  font-size: ${props => props.theme.fontSize};
  margin: auto;
`;
