import React from "react";
import {HomepageHeadingSection} from "./HomepageHeading.style";
import TripSearchBox from "./../../components/TripSearchBox/TripSearchBox"

const HomepageHeading = () => {
  return (
    <HomepageHeadingSection>
        <h2>Save time and money when travelling Colombia.</h2>
        <TripSearchBox />
    </HomepageHeadingSection>
  );
};

export default HomepageHeading;