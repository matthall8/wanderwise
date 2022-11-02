import React from "react";

import {StyledHeader, StyledLightHeader, StyledH1Header, StyledH3Header} from "./Heading.style";

const Header = (props) => {
  if (props.type === 'light') {    
    return  (
      <StyledLightHeader> 
        {props.children}
      </StyledLightHeader>
    )
}
if (props.type === 'h3') {    
  return  (
    <StyledH3Header> 
      {props.children}
    </StyledH3Header>
  )
}
if (props.type === 'h1') {    
  return  (
    <StyledH1Header> 
      {props.children}
    </StyledH1Header>
  )
}
return  (
  <StyledHeader> 
    {props.children}
  </StyledHeader>
)
};

export default Header;