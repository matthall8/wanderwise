import React from "react";
import Head from "next/head"
import Header from "../src/sections/Header/Header"
import TripSearch from "../src/sections/TripSearch/TripSearch"
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
            <Header />
            <TripSearch>
                <h1>Mexico City To Oaxaca</h1>
            </TripSearch>
            <TextSection>
                <TextContent>
                    There are two main ways to go from Mexico City to Oaxaca on public transport:
                </TextContent>
                <TextContent>
                    <p>Flight:</p>
                    <ul>
                        <li>Average journey time: 1 hour 30 minutes</li>	
                        <li>Average cost: 10,000 pesos / $110 / £80 one way</li>
                        <li>Companies: VivaMexico</li>
                    </ul>
                    <p>Bus – </p>
                    <ul>
                        <li>Average journey time: 9 hours 30 minutes</li>
                        <li>Average cost: 1,000 pesos / $10 / £8 one way</li>
                        <li>Companies: ADO</li>
                    </ul>
                </TextContent>
                <Heading type="h2">Mexico City to Oaxaca bus</Heading>
                <TextContent>
                Placeholder
                </TextContent>
                <Heading type="h2">Mexico City to Oaxaca Flight</Heading>
                <TextContent>
                Placeholder
                </TextContent>
                <Heading type="h2">Getting to Oaxaca from Mexico City FAQ</Heading>
                <Heading type="h3">What is the best way to travel from Mexico City to Oaxaca?</Heading>
                <TextContent>
                    Usually, flight or bus. The true best way depends on time and budget. The bus is cheaper so will be the best way if finances are the main concern. The flight is much quicker so it will be the best way if maximising time.
                </TextContent>
                <Heading type="h3">Is there a train from Mexico City to Oaxaca?</Heading>
                <TextContent>  
                    No. There is no long a train service connecting Mexico City to Oaxaca. All of Mexico’s passenger trains stopped running in the 2000s. 
                </TextContent>   
                <TextContent>   
                    Flight or bus is now the most common way to travel between the two destinations.
                </TextContent>            
                <Heading type="h3"> What is the distance from Mexico City to Oaxaca?</Heading>
                <TextContent>       
                    Mexico City is 289 miles or 465km from Oaxaca. It takes 9 hours on bus or a 1 hour flight. 
                </TextContent>
                <Heading type="h3">What is the Mexico City to Oaxaca flight time</Heading>
                <TextContent>
                    A direct flight will take roughly one hour to get from Mexico City to Oaxaca. 
                </TextContent>
            </TextSection>  
            <HowItWorks />
            <PopularRoutes />
            <Footer />
        </React.Fragment>
    );
  };

  export default MexicoCityToOaxaca;