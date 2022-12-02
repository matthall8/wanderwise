import React from "react";

import {StyledSelectBox} from "./SelectBox.style";

const SelectBox = (props) => {
  return (
    <StyledSelectBox>
        <option disabled hidden selected="selected">{props.initialValue}</option>
        {props.children}
    </StyledSelectBox>
  );
};

export default SelectBox;