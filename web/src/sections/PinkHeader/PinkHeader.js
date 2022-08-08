import React from "react";
import {PinkHeaderSection} from "./PinkHeader.style";
import Heading from "./../../components/Heading/Heading";

const PinkHeader = (props) => {
  return (
    <PinkHeaderSection heading={props.heading}>
      <Heading type="h1">
        {props.children}
      </Heading>
    </PinkHeaderSection>
  );
};

export default PinkHeader;