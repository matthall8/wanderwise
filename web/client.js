import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '3gv5f1tj', 
  dataset: 'production', 
  useCdn: true
});