import React from "react";
import {TripSearchSection} from "./TripSearch.style";
import TripSearchBox from "../../components/TripSearchBox/TripSearchBox"

const TripSearch = (props) => {
  return (
    <TripSearchSection>
        {props.children}
        <TripSearchBox />
    </TripSearchSection>
  );
};

export default TripSearch;