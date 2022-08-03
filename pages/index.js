import React from "react";
import Head from "next/head"
import Header from "../src/sections/Header/Header"
import TripSearch from "../src/sections/TripSearch/TripSearch"
import TextSection from "../src/sections/TextSection/TextSection" 
import HowItWorks from "../src/sections/HowItWorks/HowItWorks.js"
import PopularRoutes from "../src/sections/PopularRoutes/PopularRoutes";
import Footer from "../src/sections/Footer/Footer"

import client from "../client";
import groq from 'groq'
import {PortableText} from '@portabletext/react'

import TextContent from "./../src/components/TextContent/TextContent";
import Heading from "./../src/components/Heading/Heading";

const query = groq`*[_type == "page" && slug.current == '/'][0]{
    body
  }`

export async function getStaticProps() {
    const page = await client.fetch(query)
    return {
      props: {
        page
      }
    }
}

const Homepage = ({page}) => {
    const {
        body = []
       } = page
    return (
        <React.Fragment>
            <Head>
                <title>Wander Wise - Save time and money when travelling Mexico</title>
            </Head>
            <Header homepage={true} />
            <TripSearch>
                <h2>Save time and money when travelling Mexico.</h2>
            </TripSearch>  
            <TextSection>
                <Heading>
                    What Is Wander Wise?
                </Heading>
                <TextContent>
                    <PortableText
                        value={body}
                    />
                </TextContent>
            </TextSection>
            <HowItWorks />
            <PopularRoutes />
            <Footer />
        </React.Fragment>
    );
  };

export default Homepage;
