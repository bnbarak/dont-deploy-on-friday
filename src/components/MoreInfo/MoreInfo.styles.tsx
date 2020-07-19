import styled from "styled-components";

export const MoreInfoStyle = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 80%;
    padding: ${props => props.theme.spaceX4};
  }
`;
