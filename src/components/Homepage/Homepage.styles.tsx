import styled from "styled-components";

export const HomepageStyle = styled.div`
  @media only screen and (max-width: 600px) {
    padding: ${props => props.theme.spaceX4};
    font-size: 200%;
  }
`;

export const DontStyle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 120%;
`;
