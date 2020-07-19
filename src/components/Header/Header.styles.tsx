import styled from "styled-components";
import { ButtonStyle } from "../../utils/GeneralStyles";
import { FridayStyle } from "../Question/Question.styles";

export const HeaderStyle = styled.div`
  padding: ${props => props.theme.spaceX2} 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
`;

export const HeaderButton = styled(ButtonStyle)`
  padding-left: 0;
`;

export const LogoStyle = styled.a`
  text-transform: uppercase;
  padding: ${props => props.theme.spaceX2} 0;
  font-size: ${props => props.theme.smallFontSize};
  cursor: pointer;
`;

export const LogoTextStyle = styled.span`
  line-height: 48px;
  vertical-align: top;
  padding: ${props => props.theme.spaceX1} ${props => props.theme.spaceX2};
  color: ${props => props.theme.mainColor};
  border: 1px solid ${props => props.theme.fridayColor};
`;

export const LogoFridayStyle = styled(FridayStyle)`
  color: ${props => props.theme.mainColor};
  background: ${props => props.theme.fridayColor};
  line-height: 48px;
  font-size: ${props => props.theme.smallFontSize};
  padding: ${props => props.theme.spaceX1} ${props => props.theme.spaceX1};
  border: 1px solid ${props => props.theme.fridayColor};
  border-top: unset;
`;
