import React from "react";
import {Heading, StyledPopularRoutes} from "./PopularRoutes.style"
import Route from "./../../components/Route/Route"
import OaxacaImage from "./../../../client/images/oaxaca.webp"

const PopularRoutes = () => {
  return (
    <React.Fragment>
      <Heading>
        Most Popular Routes
      </Heading>
      <StyledPopularRoutes>
        <Route routeImage={OaxacaImage}>Mexico City to Oaxaca</Route>
        <Route routeImage={OaxacaImage}>Mexico City to Oaxaca</Route>
        <Route routeImage={OaxacaImage}>Mexico City to Oaxaca</Route>
        <Route routeImage={OaxacaImage}>Mexico City to Oaxaca</Route>
        <Route routeImage={OaxacaImage}>Mexico City to Oaxaca</Route>
        <Route routeImage={OaxacaImage}>Mexico City to Oaxaca</Route>
      </StyledPopularRoutes>
    </React.Fragment>
  );
};

export default PopularRoutes;