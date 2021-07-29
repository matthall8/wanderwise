import React from "react";
import StyledBody from "./../../sections/Body/Body"
import Header from "./../../sections/Header/Header"
import HomepageHeading from "./../../sections/HomepageHeading/HomepageHeading"
import TripSearchBox  from "./../../components/TripSearchBox/TripSearchBox"
import WhatIsWanderWise from "./../../sections/WhatIsWanderWise/WhatIsWanderWise"
import HowItWorks from "./../../sections/HowItWorks/HowItWorks.js"
import PopularRoutes from "./../../sections/PopularRoutes/PopularRoutes";

const Oaxaca = () => {
    return (
        <React.Fragment>
            <StyledBody />
            <Header />
            <HomepageHeading>
                <h2>Save time and money when travelling Mexico.</h2>
                <TripSearchBox />
            </HomepageHeading>  
            <PopularRoutes />
        </React.Fragment>
    );
  };

  export default Oaxaca;