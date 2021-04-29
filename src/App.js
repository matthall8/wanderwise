import React from "react";
import StyledBody from "./sections/Body/Body"
import Header from "./sections/Header/Header"
import HomepageHeading from "./sections/HomepageHeading/HomepageHeading"
import TripSearchBox  from "./components/TripSearchBox/TripSearchBox"
import WhatIsWanderWise from "./sections/WhatIsWanderWise/WhatIsWanderWise"
import HowItWorks from "./sections/HowItWorks/HowItWorks.js"
import PopularRoutes from "./sections/PopularRoutes/PopularRoutes";

const App = () => {
    return (
        <React.Fragment>
            <StyledBody />
            <Header />
            <HomepageHeading>
                <h2>Save time and money when travelling Colombia.</h2>
                <TripSearchBox />
            </HomepageHeading>  
            <WhatIsWanderWise />
            <HowItWorks />
            <PopularRoutes />
        </React.Fragment>
    );
  };

  export default App;