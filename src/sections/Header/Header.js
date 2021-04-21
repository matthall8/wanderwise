import React from "react";
import {StyledHeader, LogoH1, BurgerMenu} from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
        <LogoH1>Wander Wise</LogoH1>
        <BurgerMenu>
            <div />
            <div />
            <div />
      </BurgerMenu>
    </StyledHeader>
  );
};

export default Header;