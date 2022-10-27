import nextConnect from 'next-connect';

import client from '../../../utils/client';

const handler = nextConnect()

handler.get(async (req, res) => {
  const { id } = req.query

  const data = await client.fetch(`*[_type == 'user' && _id == '${id}']{addresses}`)
  // const data = await client.fetch(`*[_type == 'user']`)
  // ? TO get addresses only; query = ...query]{addresses}
  res.send(data)
})

export default handler