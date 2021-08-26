import React from "react";
import Navigation from "../Navigation/Navigation"
import {StyledHeader, LogoH1, LogoH2} from "./Header.style";
import Link from 'next/link'


const Header = (props) => {
  const isHomepage = props.homepage;
  return (
    <StyledHeader>
            {isHomepage
              ? <LogoH1> <Link href="/"><a>Wander Wise</a></Link></LogoH1>
              : <LogoH2> <Link href="/"><a>Wander Wise</a></Link></LogoH2>     
            }
        <Navigation />
    </StyledHeader>
  );
};
export default Header;