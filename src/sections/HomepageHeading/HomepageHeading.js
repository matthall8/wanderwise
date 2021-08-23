import React from "react";
import {HomepageHeadingSection} from "./HomepageHeading.style";
import TripSearchBox from "./../../components/TripSearchBox/TripSearchBox"

const HomepageHeading = (props) => {
  return (
    <HomepageHeadingSection>
        {props.children}
        <TripSearchBox />
    </HomepageHeadingSection>
  );
};

export default HomepageHeading;