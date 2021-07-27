import React from "react";
import { StyledRoute, RouteDescription } from "./Route.style";

const Route = props => (
  <StyledRoute>
    <RouteDescription>{props.children}</RouteDescription>
  </StyledRoute>
);

export default Route;