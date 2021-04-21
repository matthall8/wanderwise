import React from "react";

import {StyledButton} from "./Button.style";

const Button = (props) => {
  return (
    <StyledButton>
        {props.value}
    </StyledButton>
  );
};

export default Button;