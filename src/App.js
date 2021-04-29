import React from "react";
import StyledBody from "./sections/Body/Body"
import Header from "./sections/Header/Header"
import HomepageHeading from "./sections/HomepageHeading/HomepageHeading"
import TripSearchBox  from "./components/TripSearchBox/TripSearchBox"
import WhatIsWanderWise from "./sections/WhatIsWanderWise/WhatIsWanderWise"


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
        </React.Fragment>
    );
  };

  export default App;