import styled from "styled-components";
import { ButtonStyle } from "../../utils/GeneralStyles";

export const HeaderStyle = styled.div`
  padding: ${props => props.theme.spaceX2} 0;
`;

export const HeaderButton = styled(ButtonStyle)`
  padding-left: 0;
`;
