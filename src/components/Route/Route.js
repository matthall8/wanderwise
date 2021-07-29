import React from "react";
import { StyledRoute, RouteDescription, RouteImage } from "./Route.style";
import { Link } from "react-router-dom";

const Route = props => (
  <StyledRoute>
    <RouteImage src={props.routeImage} alt="Route Image" />
    <RouteDescription><Link to={props.link}>{props.children}</Link></RouteDescription>
  </StyledRoute>
);

export default Route;