import React from "react";
import {StyledTextSection} from "./TextSection.style"


const TextSection = (props) => {
  return (
    <StyledTextSection>
      {props.children}
    </StyledTextSection>
  );
};

export default TextSection;