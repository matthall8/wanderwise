import React from "react";
import { StyledRoute, RouteDescription, RouteImage } from "./Route.style";
import Link from 'next/link';
const Route = props => (
  <StyledRoute>
    <RouteImage src={props.routeImage} alt="Route Image" />
    <RouteDescription><Link href="/mexico-city-to-oaxaca"><a>{props.children}</a></Link></RouteDescription>
  </StyledRoute>
);

export default Route;