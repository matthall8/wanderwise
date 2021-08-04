import React from "react";
import Head from "next/head"
import StyledBody from "../src/sections/Body/Body"
import Header from "../src/sections/Header/Header"
import HomepageHeading from "../src/sections/HomepageHeading/HomepageHeading"
import TripSearchBox  from "../src/components/TripSearchBox/TripSearchBox"
import WhatIsWanderWise from "../src/sections/WhatIsWanderWise/WhatIsWanderWise"
import HowItWorks from "../src/sections/HowItWorks/HowItWorks.js"
import PopularRoutes from "../src/sections/PopularRoutes/PopularRoutes";


const Homepage = () => {
    return (
        <React.Fragment>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Muli:wght@500;700;800;900&display=swap" rel="stylesheet" /> 
                <title>Wander Wise</title>
            </Head>
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

  export default Homepage;