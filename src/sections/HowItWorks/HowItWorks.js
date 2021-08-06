import React from "react";
import TextContent from "./../../components/TextContent/TextContent"
import Heading from "./../../components/Heading/Heading"
import {HowItWorksSection} from "./HowItWorks.style"

const HowItWorks = () => {
  return (
    <HowItWorksSection>
      <Heading type="light">
        How Does It Work?
      </Heading>
      <TextContent>
        This is lorum ipsum text content which is sat here to be a placeholder for the loook and feel of the text content
      </TextContent>
      <TextContent>
        This is a continuation of lorum ipsum text content which is sat here to be a placeholder for the loook and feel of the text content
      </TextContent>
      </HowItWorksSection>
  );
};

export default HowItWorks;