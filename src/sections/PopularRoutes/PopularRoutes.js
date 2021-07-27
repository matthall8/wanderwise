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
        <Route>Mexico City to Oaxaca</Route>
        <Route>Oaxaca to Mexico City</Route>
      </StyledPopularRoutes>
    </React.Fragment>
  );
};

export default PopularRoutes;