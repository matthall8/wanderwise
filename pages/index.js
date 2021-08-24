import React from "react";
import Head from "next/head"
import StyledBody from "../src/sections/Body/Body"
import Header from "../src/sections/Header/Header"
import HomepageHeading from "../src/sections/HomepageHeading/HomepageHeading"
import WhatIsWanderWise from "../src/sections/WhatIsWanderWise/WhatIsWanderWise"
import HowItWorks from "../src/sections/HowItWorks/HowItWorks.js"
import PopularRoutes from "../src/sections/PopularRoutes/PopularRoutes";
import Footer from "../src/sections/Footer/Footer"

const Homepage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Wander Wise - Save time and money when travelling Mexico</title>
            </Head>
            <StyledBody />
            <Header />
            <HomepageHeading>
                <h2>Save time and money when travelling Colombia.</h2>
            </HomepageHeading>  
            <WhatIsWanderWise />
            <HowItWorks />
            <PopularRoutes />
            <Footer />
        </React.Fragment>
    );
  };

  export default Homepage;