import nextConnect from 'next-connect';
import bcrypt from 'bcryptjs'

import client from '../../../utils/client';
import { signToken } from '../../../utils/auth';

const handler = nextConnect()

handler.post(async (req, res) => {
  const { email, password } = req.body
  const user = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    { email: email }
  )
  if (!user) {
    res.status(401).send({ message: 'No user with that email found.' })
  }
  else if (user && bcrypt.compareSync(password, user.password)) {
    const token = signToken({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
  } else {
    res.status(401).send({ message: 'Invalid email or password.' });
  }
})

export default handler