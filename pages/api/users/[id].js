import axios from 'axios';
import nextConnect from 'next-connect';

import client from '../../../utils/client';
import config from "../../../utils/config";

const handler = nextConnect()
const projectId = config.projectId
const dataset = config.dataset
const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN

handler.put(async (req, res) => {
  const { _key } = req.body
  const { id } = req.query
  // const user = await client.fetch(`*[_type == 'user' && _id == '${id}'][0]`)
  const result = await client.fetch(`*[_type == 'user' && _id == '${id}']{addresses}`)
  const addresses = result[0].addresses
  const selectedAddr = addresses.filter(a => a._key === _key)

  await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    {
      mutations: [
        {
          patch: {
            id: id,
            set: {
              defaultAddress: {
                refKey: selectedAddr[0]._key,
                _key: selectedAddr[0]._key,
                state: selectedAddr[0].state,
                street: selectedAddr[0].street,
                postal: selectedAddr[0].postal
              }
            }
          }
        }
      ]
    },
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  )

  res.send({ msg: 'Default address changed!' })

})

export default handler