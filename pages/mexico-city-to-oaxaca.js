import React from "react";
import StyledBody from "../src/sections/Body/Body"
import Head from "next/head"
import Header from "../src/sections/Header/Header"
import HomepageHeading from "../src/sections/HomepageHeading/HomepageHeading"
import TextSection from "../src/sections/TextSection/TextSection" 
import PopularRoutes from "../src/sections/PopularRoutes/PopularRoutes";
import HowItWorks from "../src/sections/HowItWorks/HowItWorks.js";
import Footer from "../src/sections/Footer/Footer";

import TextContent from "./../src/components/TextContent/TextContent";
import Heading from "./../src/components/Heading/Heading";

const MexicoCityToOaxaca = () => {
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
            <TextSection>
                <Heading>
                    What Is The Best Transport?
                </Heading>
                <TextContent>
                    This is test content and will be updated shortly. Thank you for your patience in this whole situation.
                </TextContent>
            </TextSection>  
            <HowItWorks />
            <PopularRoutes />
            <Footer />
        </React.Fragment>
    );
  };

  export default MexicoCityToOaxaca;