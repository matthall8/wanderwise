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
            <TripSearch heading="Mexico City to Oaxaca">
                <h1>Mexico City To Oaxaca</h1>
            </TripSearch>
            <TextSection>
                <Heading>Getting from Mexico City to Oaxaca</Heading>
                <TextContent>
                    There are two main ways to go from Mexico City to Oaxaca on public transport:
                </TextContent>
                <TextContent>
                    Flight:
                </TextContent>
                <ul>
                    <li>Average journey time: 1 hour 30 minutes</li>	
                    <li>Average cost: 10,000 pesos / $110 / £80 one way</li>
                    <li>Companies: Aeromexico, Volaris, VivaMexico.</li>
                </ul>
                <TextContent>Bus –</TextContent> 
                    <ul>
                        <li>Average journey time: 9 hours 30 minutes</li>
                        <li>Average cost: 1,000 pesos / $10 / £8 one way</li>
                        <li>Companies: ADO</li>
                    </ul>
                <Heading>Mexico City to Oaxaca bus</Heading>
                <TextContent>
                    Taking the bus from Mexico City to Oaxaca is a popular choice amongst travellers in Mexico. It is budget friendly, costing around $10 each way, and the drive between Mexico City and Oaxaca is a scenic one.
                </TextContent>
                <TextContent>
                    One of the most popular bus companies for tourists is ADO, which runs regularly between Mexico City and Oaxaca. 
                </TextContent>
                <Heading>Mexico City to Oaxaca Flight</Heading>
                <TextContent>
                    The fastest way from Mexico City to Oaxaca is by flight. The average direct flight time is 65 minutes (1 hour and 5 minutes). There are lots of flights to choose from with a flight leaving around every 2 hours from 7AM to 9PM. 
                </TextContent>
                <TextContent>
                The most popular airlines for tourists are Aeromexico, VivaMexico and Volaris. All are reputable with VivaMexico and Volaris often the cheapest. 
                </TextContent>
                <Heading>Getting to Mexico City to Oaxaca FAQ</Heading>
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