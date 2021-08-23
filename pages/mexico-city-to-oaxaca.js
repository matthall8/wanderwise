import React from "react";
import StyledBody from "../src/sections/Body/Body"
import Head from "next/head"
import Header from "../src/sections/Header/Header"
import HomepageHeading from "../src/sections/HomepageHeading/HomepageHeading"
import PopularRoutes from "../src/sections/PopularRoutes/PopularRoutes";

const Oaxaca = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Mexico City To Oaxaca - Wander Wise</title>
            </Head>
            <StyledBody />
            <Header />
            <HomepageHeading>
                <h1>Mexico City To Oaxaca</h1>
            </HomepageHeading>  
            <PopularRoutes />
        </React.Fragment>
    );
  };

  export default Oaxaca;