import React from "react";
import Navigation from "../Navigation/Navigation"
import {StyledHeader, LogoH1, LogoH2} from "./Header.style";
import Link from 'next/link'
import Script from 'next/script'

const Header = (props) => {
  const isHomepage = props.homepage;
  return (
    <React.Fragment>
       <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGVHFFBQ');
          `}
        </Script>
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