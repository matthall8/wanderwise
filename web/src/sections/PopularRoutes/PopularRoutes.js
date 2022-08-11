import React from "react";
import Heading from "./../../components/Heading/Heading"
import {StyledPopularRoutesSection, PopularRouteLinks} from "./PopularRoutes.style"
import Route from "./../../components/Route/Route"

const PopularRoutes = () => {
  return (
    <StyledPopularRoutesSection>
      <Heading>
        Most Popular Routes
      </Heading>
      <PopularRouteLinks>
        <Route routeImage="images/oaxaca.webp" link="/mexico/mexico-city-to-oaxaca">Mexico City to Oaxaca</Route>
        <Route routeImage="images/oaxaca.webp">Mexico City to Oaxaca</Route>
        <Route routeImage="images/oaxaca.webp">Mexico City to Oaxaca</Route>
        <Route routeImage="images/oaxaca.webp">Mexico City to Oaxaca</Route>
        <Route routeImage="images/oaxaca.webp">Mexico City to Oaxaca</Route>
        <Route routeImage="images/oaxaca.webp">Mexico City to Oaxaca</Route>
      </PopularRouteLinks>
    </StyledPopularRoutesSection>
  );
};

export default PopularRoutes;