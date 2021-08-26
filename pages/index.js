import React from "react";
import Head from "next/head"
import Header from "../src/sections/Header/Header"
import TripSearch from "../src/sections/TripSearch/TripSearch"
import TextSection from "../src/sections/TextSection/TextSection" 
import HowItWorks from "../src/sections/HowItWorks/HowItWorks.js"
import PopularRoutes from "../src/sections/PopularRoutes/PopularRoutes";
import Footer from "../src/sections/Footer/Footer"

import TextContent from "./../src/components/TextContent/TextContent";
import Heading from "./../src/components/Heading/Heading";

const Homepage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Wander Wise - Save time and money when travelling Mexico</title>
            </Head>
            <Header homepage={true} />
            <TripSearch>
                <h2>Save time and money when travelling Mexico.</h2>
            </TripSearch>  
            <TextSection>
                <Heading>
                    What Is Wander Wise?
                </Heading>
                <TextContent>
                    I’ll never forget the week I arrived in Bogota, to begin my first backpacking trip. The excitement, the nerves and then the confusion. How do I get to my next destination? How long will it take? Do I fly or take the bus? Are there trains? How much will it cost? Is it safe?  Is this the best way? The seeds for Wander Wise were sown.
                </TextContent>
                <TextContent>
                    Wander Wise is a multi-transport search tool that helps you make the best decision on how to get from A to B. It answers all the questions I had when arriving in Colombia. 
                </TextContent>
                <TextContent>
                    We provide information on only the safest transportation companies and help you book directly, with their best price guaranteed. 
                </TextContent>
            </TextSection>
            <HowItWorks />
            <PopularRoutes />
            <Footer />
        </React.Fragment>
    );
  };

  export default Homepage;