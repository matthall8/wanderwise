import React from "react";
import Heading from "./../../components/Heading/Heading"
import {StyledPopularRoutesSection, PopularRouteLinks} from "./PopularRoutes.style"
import Route from "./../../components/Route/Route"
import Oaxaca from "./../../../public/images/oaxaca.webp"
import MexicoCity from "./../../../public/images/cdmx.webp"
import Cancun from "./../../../public/images/cancun.webp"
import Tulum from "./../../../public/images/tulum.webp"
import Guadalajara from "./../../../public/images/guadalajara.webp"

const PopularRoutes = () => {
  return (
    <StyledPopularRoutesSection>
      <Heading>
        Most Popular Routes
      </Heading>
      <PopularRouteLinks>
        <Route routeImage={Oaxaca} href="/mexico/mexico-city-to-oaxaca">Mexico City to Oaxaca</Route>
        <Route routeImage={MexicoCity} href="/mexico/oaxaca-to-mexico-city">Oaxaca to Mexico City</Route>
        <Route routeImage={Cancun} href="/mexico/mexico-city-to-cancun">Mexico City to Cancun</Route>
        <Route routeImage={Tulum} href="/mexico/cancun-to-tulum">Cancun to Tulum</Route>
        <Route routeImage={Guadalajara} href="/mexico/mexico-city-to-guadalajara">Mexico City to Guadalajaraa</Route>
        <Route routeImage={Oaxaca} href="#">Mexico City to Oaxaca</Route>
      </PopularRouteLinks>
    </StyledPopularRoutesSection>
  );
};

export default PopularRoutes;