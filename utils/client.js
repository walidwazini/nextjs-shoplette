import client from '@sanity/client'

import config from './config'

export default client({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: "2022-03-10",
  useCdn: true,
  // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})