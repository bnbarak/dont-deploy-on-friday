import styled from "styled-components";

export const AppStyle = styled.div`
  width: ${props => props.theme.appWidth};
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.mainColor};
  height: 100vh;
  margin: auto;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
