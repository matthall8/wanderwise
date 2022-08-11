import React from "react";

import {StyledSelectBox} from "./SelectBox.style";

const SelectBox = (props) => {
  return (
    <StyledSelectBox>
        <option disabled hidden selected="selected">{props.initialValue}</option>
        <option value="1">{props.option}</option>
    </StyledSelectBox>
  );
};

export default SelectBox;