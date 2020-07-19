import React from "react";
import {
  HeaderButton,
  HeaderStyle,
  LogoStyle,
  LogoTextStyle,
  LogoFridayStyle,
  LogoFlexContainer,
  OtherTextStyle
} from "./Header.styles";
import { useHistory } from "react-router-dom";

const Logo = () => (
  <LogoStyle href="/">
    <LogoTextStyle>Deploy On a </LogoTextStyle>
    <LogoFridayStyle>Friday</LogoFridayStyle>
  </LogoStyle>
);

export const Header = () => {
  const history = useHistory();
  return (
    <HeaderStyle>
      <LogoFlexContainer>
        <Logo />
        <HeaderButton onClick={() => history.push("/info")}>
          More Information
        </HeaderButton>
      </LogoFlexContainer>
      <OtherTextStyle>
          Why you should <strong>not</strong> deploy or release on a Friday
      </OtherTextStyle>
    </HeaderStyle>
  );
};
