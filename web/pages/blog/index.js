import React from "react";
import Head from "next/head"
import Header from "../../src/sections/Header/Header"
import PinkHeader from "../../src/sections/PinkHeader/PinkHeader"
import TextSection from "../../src/sections/TextSection/TextSection" 
import Footer from "../../src/sections/Footer/Footer"

import TextContent from "./../../src/components/TextContent/TextContent";
import Heading from "./../../src/components/Heading/Heading";

import Link from 'next/link'
import groq from 'groq'
import client from '../../client'

const BlogIndex = ({posts}) => {
    return (
      <React.Fragment>
        <Head>
            <title>Travel Blog - Wander Wise</title>
        </Head>
        <Header homepage={false} />
        <PinkHeader>
          Travel News &amp; Advice
        </PinkHeader>
            <TextSection>
                <Heading>
                    Our Latest Blog Posts
                </Heading>
                <TextContent>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
        </TextContent>
        </TextSection>
        <Footer />
      </React.Fragment>
    )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post"] | order(publishedAt desc)
    `)
  return {
    props: {
      posts
    }
    // Remove revalidate
  }
}

export default BlogIndex