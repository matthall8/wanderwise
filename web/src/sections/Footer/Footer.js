import React from "react";
import { StyledFooter } from "./Footer.style";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <StyledFooter>
      <p>Wanderwise is not responsible for content on external websites.</p>
      <p>&copy; 2022-{currentYear} Wanderwise. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;