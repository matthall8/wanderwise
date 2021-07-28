import React from "react";
import { StyledRoute, RouteDescription, RouteImage } from "./Route.style";

const Route = props => (
  <StyledRoute>
    <RouteImage src={props.routeImage} alt="Route Image" />
    <RouteDescription>{props.children}</RouteDescription>
  </StyledRoute>
);

export default Route;