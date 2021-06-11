import React from "react";
import CheckboxToggle from "../CheckboxToggle/";
import { HeaderContainer, HeaderPage } from "./Header.styled";

const Header = () => {
  return (
    <HeaderPage>
      <HeaderContainer>
        <CheckboxToggle />
      </HeaderContainer>
    </HeaderPage>
  );
};

export default Header;
