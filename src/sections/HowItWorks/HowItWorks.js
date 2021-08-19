import React from "react";
// import TextContent from "./../../components/TextContent/TextContent"
import Heading from "./../../components/Heading/Heading"
import {HowItWorksSection, StepWrapper, Step} from "./HowItWorks.style"
import Image from 'next/image'
import tripDetailsIcon from '../../../public/images/distance.png'
import bookedIcon from '../../../public/images/booked_icon.png'
import searchIcon from '../../../public/images/searches.png'

const HowItWorks = () => {
  return (
    <HowItWorksSection>
      <Heading type="light">
        How Does It Work?
      </Heading>
      <StepWrapper>
        <Step>
          <Image src={tripDetailsIcon} alt="Route details icon" />
          <h3>1. Enter your trip details</h3>
          <p>Tell us where you’re leaving from, where you’re going to and your departure date</p>
        </Step>
        <Step>
          <Image src={searchIcon} alt="Search icon" />
          <h3>2. Wanderwise searches</h3>
          <p>Wanderwise searches the safest public transport options for your trip</p>
        </Step>
        <Step>
          <Image src={bookedIcon} alt="Person sitting on chair" />
          <h3>3. Book your best trip</h3>
          <p>Wanderwise returns the information for you to book your perfect journey</p>
        </Step>
      </StepWrapper>
    </HowItWorksSection>
  );
};

export default HowItWorks;