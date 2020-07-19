import React from "react";
import {
  HeaderButton,
  HeaderStyle,
  LogoStyle,
  LogoTextStyle,
  LogoFridayStyle
} from "./Header.styles";

const Logo = () => (
  <LogoStyle>
    <LogoTextStyle>Deploy On a </LogoTextStyle>
    <LogoFridayStyle>Friday</LogoFridayStyle>
  </LogoStyle>
);

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <HeaderButton>More Information</HeaderButton>
    </HeaderStyle>
  );
};
