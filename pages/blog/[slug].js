import React from "react";
import Head from "next/head"
import Header from "../../src/sections/Header/Header"
import PinkHeader from "../../src/sections/PinkHeader/PinkHeader"
import TextSection from "../../src/sections/TextSection/TextSection" 
import Footer from "../../src/sections/Footer/Footer"

import TextContent from "./../../src/components/TextContent/TextContent";
import Heading from "./../../src/components/Heading/Heading";

import groq from 'groq'
import client from "../../client";
import {PortableText} from '@portabletext/react'

const Post = ({post}) => {
  const {
     title = 'Missing title', 
     name = 'Missing name',
     body = []
    } = post
  return (
  <React.Fragment>
      <Head>
        <title>{title} - Wander Wise</title>
      </Head>
      <Header homepage={false} />
      <PinkHeader>{title}</PinkHeader>
      <TextSection>
        <TextContent>
          <article>
            <PortableText
              value={body}
            />
          </article>
        </TextContent>
      </TextSection>
      <Footer />
    </React.Fragment>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}

export default Post