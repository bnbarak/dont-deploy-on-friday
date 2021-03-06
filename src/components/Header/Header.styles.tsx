import styled from "styled-components";
import { ButtonStyle, LinkStyle } from "../../utils/GeneralStyles";
import { FridayStyle } from "../Question/Question.styles";

export const HeaderStyle = styled.div`
  padding: ${props => props.theme.spaceX2} 0;

  border-bottom: 1px solid;

  @media only screen and (max-width: 600px) {
    padding: ${props => props.theme.spaceX1} ${props => props.theme.spaceX1};
  }
`;

export const HeaderButton = styled(ButtonStyle)`
  padding-left: 0;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 5px 10px;
  }
`;

export const LogoStyle = styled(LinkStyle)`
  text-transform: uppercase;
  padding: ${props => props.theme.spaceX2} 0;
  font-size: ${props => props.theme.smallFontSize};
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const LogoFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoTextStyle = styled.span`
  line-height: 48px;
  vertical-align: top;
  padding: ${props => props.theme.spaceX1} ${props => props.theme.spaceX2};
  color: ${props => props.theme.mainColor};
  border: 1px solid ${props => props.theme.fridayColor};

  @media only screen and (max-width: 600px) {
    padding: 5px 10px;
    font-size: 18px;
  }
`;

export const LogoFridayStyle = styled(FridayStyle)`
  color: ${props => props.theme.mainColor};
  background: ${props => props.theme.fridayColor};
  line-height: 48px;
  font-size: ${props => props.theme.smallFontSize};
  padding: ${props => props.theme.spaceX1} ${props => props.theme.spaceX1};
  border: 1px solid ${props => props.theme.fridayColor};
  border-top: unset;
  text-transform: initial;

  @media only screen and (max-width: 600px) {
    padding: 5px 10px;
    font-size: 18px;
  }
`;

export const OtherTextStyle = styled.div`
  font-size: 18px;
  color: #9a9a9a;

  @media only screen and (max-width: 600px) {
    padding-top: ${props => props.theme.spaceX2};
    text-align: center;
  }
`;

export const DonateStyle = styled.div`
  height: 50px;
  color: #fce21b;
  font-size: 20px;
  text-align: center;

  a {
    border: 1px solid;
    padding: 3px 10px;
    cursor: pointer;
    text-decoration: unset;
  }
  
  a:visited {
    color: #fce21b;
  }
`;
