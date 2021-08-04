import React from "react";
import {Heading, StyledPopularRoutes} from "./PopularRoutes.style"
import Route from "./../../components/Route/Route"

const PopularRoutes = () => {
  return (
    <React.Fragment>
      <Heading>
        Most Popular Routes
      </Heading>
      <StyledPopularRoutes>
        <Route routeImage="images/oaxaca.webp" link="/mexico-city-to-oaxaca">Mexico City to Oaxaca</Route>
        <Route routeImage="images/oaxaca.webp">Mexico City to Oaxaca</Route>
        <Route routeImage="images/oaxaca.webp">Mexico City to Oaxaca</Route>
        <Route routeImage="images/oaxaca.webp">Mexico City to Oaxaca</Route>
        <Route routeImage="images/oaxaca.webp">Mexico City to Oaxaca</Route>
        <Route routeImage="images/oaxaca.webp">Mexico City to Oaxaca</Route>
      </StyledPopularRoutes>
    </React.Fragment>
  );
};

export default PopularRoutes;