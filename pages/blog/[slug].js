import client from "../../client";

import groq from 'groq'
import {PortableText} from '@portabletext/react'

const Post = ({post}) => {
  const {
     title = 'Missing title', 
     name = 'Missing name',
     body = []
    } = post
  return (
    <article>
      <h1>{title}</h1>
      <PortableText
        value={body}
      />
    </article>
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
    fallback: true,
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