import React from "react";
import Head from "next/head"
import Header from "../src/sections/Header/Header"
import TripSearch from "../src/sections/TripSearch/TripSearch"
import TextSection from "../src/sections/TextSection/TextSection" 
import PopularRoutes from "../src/sections/PopularRoutes/PopularRoutes";
import HowItWorks from "../src/sections/HowItWorks/HowItWorks.js";
import Footer from "../src/sections/Footer/Footer";

import client from "../client";
import groq from 'groq'
import {PortableText} from '@portabletext/react'

import TextContent from "./../src/components/TextContent/TextContent";
import Heading from "./../src/components/Heading/Heading";

const query = groq`*[_type == "mexico" && slug.current == 'mexico-city-to-oaxaca'][0]{
    title,
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

const portableTextComponents = {
    types: {
      faq: ({value}) => {
        return(
            <React.Fragment>
                <Heading type="h3">{value.question}</Heading>
                <TextContent>  
                    {value.answer}
                </TextContent>
            </React.Fragment>
        )
      }
    }
}


const MexicoCityToOaxaca = ({page}) => {
    const {
        body = [],
        title = 'Home',
       } = page
    return (
        <React.Fragment>
            <Head>
                <title>{title} - Wander Wise</title>
            </Head>
            <Header />
            <TripSearch heading="Mexico City to Oaxaca">
                <h1>{title}</h1>
            </TripSearch>
            <TextSection>
            <PortableText
                value={body}
                components={portableTextComponents}
            />
            </TextSection>  
            <HowItWorks />
            <PopularRoutes />
            <Footer />
        </React.Fragment>
    );
  };

  export default MexicoCityToOaxaca;