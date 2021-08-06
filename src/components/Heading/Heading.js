import React from "react";

import {StyledHeader, StyledLightHeader} from "./Heading.style";

const Header = (props) => {
  if (props.type === 'light') {    
    return  (
      <StyledLightHeader> 
        {props.children}
      </StyledLightHeader>
    )
}  
return  (
  <StyledHeader> 
    {props.children}
  </StyledHeader>
)
};

export default Header;