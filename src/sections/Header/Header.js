import React from "react";
import Navigation from "../Navigation/Navigation"
import {StyledHeader, LogoH1, BurgerMenu} from "./Header.style";
import Link from 'next/link'

const Header = () => {
  return (
    <StyledHeader>
        <LogoH1><Link href="/"><a>Wander Wise</a></Link></LogoH1>
        <Navigation />
    </StyledHeader>
  );
};
export default Header;