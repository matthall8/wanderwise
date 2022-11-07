import React from "react";
import { StyledRoute, RouteDescription, RouteImage } from "./Route.style";
import Link from 'next/link';
import Image from 'next/image'
const Route = props => (
  <StyledRoute>
    <Link href={`${props.href}`}><a><Image src={props.routeImage} alt="Route Image" width="345" height="135" /></a></Link>
    <RouteDescription><Link href={`${props.href}`}><a>{props.children}</a></Link></RouteDescription>
  </StyledRoute>
);
export default Route;