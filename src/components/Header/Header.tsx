import React from "react";
import {
  HeaderButton,
  HeaderStyle,
  LogoStyle,
  LogoTextStyle,
  LogoFridayStyle,
  LogoFlexContainer,
  OtherTextStyle,
  DonateStyle
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
      <DonateStyle>
        <a href="https://secure.actblue.com/donate/ms_blm_homepage_2019">
          Support
        </a>{" "}
        the movment
      </DonateStyle>
      <LogoFlexContainer>
        <Logo />
        <HeaderButton onClick={() => history.push("/about")}>
          About
        </HeaderButton>
      </LogoFlexContainer>
      <OtherTextStyle>
        Why you should <strong>not</strong> deploy or release on a Friday
      </OtherTextStyle>
    </HeaderStyle>
  );
};
