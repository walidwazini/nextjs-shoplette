import nc from 'next-connect'

import client from '../../../utils/client'
import { getProductById } from '../../../utils/queries'

const handler = nc()

handler.get(async (req, res) => {
  const product = await client.fetch(getProductById(), { id: req.query.id })
  res.send(product)
})

export default handler
