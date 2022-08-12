import React from "react";
import { StyledRoute, RouteDescription, RouteImage } from "./Route.style";
import Link from 'next/link';
import Image from 'next/image'
const Route = props => (
  <StyledRoute>
    <Image src={props.routeImage} alt="Route Image" width="345" height="135" />
    <RouteDescription><Link href="/mexico/mexico-city-to-oaxaca"><a>{props.children}</a></Link></RouteDescription>
  </StyledRoute>
);

export default Route;