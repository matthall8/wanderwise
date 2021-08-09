import React from "react";
import TextContent from "./../../components/TextContent/TextContent"
import Heading from "./../../components/Heading/Heading"
import {StyledWhatIsSection} from "./WhatIsWanderWise.style"

const WhatIsWanderWise= () => {
  return (
    <StyledWhatIsSection>
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
    </StyledWhatIsSection>
  );
};

export default WhatIsWanderWise;