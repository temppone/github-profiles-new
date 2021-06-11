import React from "react";
import CheckboxSwitch from "../CheckboxSwitch/";
import { HeaderLogo, HeaderContainer, HeaderPage } from "./Header.styled";
import headerLogoImg from "./img/headerLogo.svg";

const Header = () => {
  return (
    <HeaderPage>
      <HeaderContainer>
        <HeaderLogo src={headerLogoImg} />
        <CheckboxSwitch />
      </HeaderContainer>
    </HeaderPage>
  );
};

export default Header;
