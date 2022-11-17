import React from "react";
import {TripSearchSection} from "./TripSearch.style";
import TripSearchBox from "../../components/TripSearchBox/TripSearchBox"

const TripSearch = (props) => {
  return (
    <TripSearchSection heading={props.heading} mainImage={props.mainImage}>
        {props.children}
        <TripSearchBox />
    </TripSearchSection>
  );
};

export default TripSearch;