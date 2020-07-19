import React from "react";
import {
  HeaderButton,
  HeaderStyle,
  LogoStyle,
  LogoTextStyle,
  LogoFridayStyle
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
      <Logo />
      <HeaderButton onClick={() => history.push("/info")}>
        More Information
      </HeaderButton>
    </HeaderStyle>
  );
};
