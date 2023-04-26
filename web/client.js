import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.REACT_APP_SANITY_ID,
  dataset: 'production',
  apiVersion: '2022-11-07',
  useCdn: true,
});