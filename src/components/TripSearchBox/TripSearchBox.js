import React from "react";
import {TripSearchBoxWrapper} from "./TripSearchBox.style";
import SelectBox from "./../SelectBox/SelectBox";
import Button from "./../Button/Button"

const TripSearchBox = () => {
  return (
    <TripSearchBoxWrapper>
        <SelectBox initialValue="Leaving from..." />
        <SelectBox initialValue="Going to..."/>
        <SelectBox initialValue="Departure Date"/>
        <Button value="Go"></Button>
    </TripSearchBoxWrapper>
  );
};

export default TripSearchBox;