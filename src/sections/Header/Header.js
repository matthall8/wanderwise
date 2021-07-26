import React from "react";
import Navigation from "../Navigation/Navigation"
import {StyledHeader, LogoH1, BurgerMenu} from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
        <LogoH1>Wander Wise</LogoH1>
        <Navigation />
    </StyledHeader>
  );
};
export default Header;