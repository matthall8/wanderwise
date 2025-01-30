import React from "react";
import Navigation from "../Navigation/Navigation"
import {StyledHeader, LogoH1, LogoH2} from "./Header.style";
import Link from 'next/link'
import Script from 'next/script'

const Header = (props) => {
  const isHomepage = props.homepage;
  return (
    <React.Fragment>
      <StyledHeader>
              {isHomepage
                ? <LogoH1> <Link href="/">Wander Wise</Link></LogoH1>
                : <LogoH2> <Link href="/">Wander Wise</Link></LogoH2>     
              }
          <Navigation />
      </StyledHeader>
    </React.Fragment>
  );
};
export default Header;