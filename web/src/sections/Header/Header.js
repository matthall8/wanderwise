import React from "react";
import Navigation from "../Navigation/Navigation"
import {StyledHeader, LogoH1, LogoH2} from "./Header.style";
import Link from 'next/link'
import Script from 'next/script'

const Header = (props) => {
  const isHomepage = props.homepage;
  return (
    <React.Fragment>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-PB4Q6HDTH5" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PB4Q6HDTH5');
          `}
      </Script>
      <StyledHeader>
              {isHomepage
                ? <LogoH1> <Link href="/"><a>Wander Wise</a></Link></LogoH1>
                : <LogoH2> <Link href="/"><a>Wander Wise</a></Link></LogoH2>     
              }
          <Navigation />
      </StyledHeader>
    </React.Fragment>
  );
};
export default Header;