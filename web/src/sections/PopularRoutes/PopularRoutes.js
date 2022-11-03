import React from "react";
import Heading from "./../../components/Heading/Heading"
import {StyledPopularRoutesSection, PopularRouteLinks} from "./PopularRoutes.style"
import Route from "./../../components/Route/Route"
import Oaxaca from "./../../../public/images/oaxaca.webp"
import MexicoCity from "./../../../public/images/cdmx.webp"

const PopularRoutes = () => {
  return (
    <StyledPopularRoutesSection>
      <Heading>
        Most Popular Routes
      </Heading>
      <PopularRouteLinks>
        <Route routeImage={Oaxaca} href="/mexico/mexico-city-to-oaxaca">Mexico City to Oaxaca</Route>
        <Route routeImage={MexicoCity} href="/mexico/oaxaca-to-mexico-city">Oaxaca to Mexico City</Route>
        <Route routeImage={Oaxaca}>Mexico City to Oaxaca</Route>
        <Route routeImage={Oaxaca}>Mexico City to Oaxaca</Route>
        <Route routeImage={Oaxaca}>Mexico City to Oaxaca</Route>
        <Route routeImage={Oaxaca}>Mexico City to Oaxaca</Route>
      </PopularRouteLinks>
    </StyledPopularRoutesSection>
  );
};

export default PopularRoutes;