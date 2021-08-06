import React from "react";

import {StyledText} from "./TextContent.style";

const TextContent = (props) => {
  return (
    <StyledText>
        {props.children}
    </StyledText>
  );
};

export default TextContent;