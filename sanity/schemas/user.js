export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },
    {
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean',
    },
    {
      name: 'adresses',
      title: 'Addresses',
      type: 'array',
      of: [
        {
          name: 'address',
          title: 'address',
          type: 'object',
          fields: [
            {
              title: 'State,Area',
              name: 'state',
              type: 'string'
            },
            {
              title: 'Postal Code',
              name: 'postal',
              type: 'number',
            },
            {
              title: 'House,Building,Street Name',
              name: 'street',
              type: 'string'
            }
          ]
        }
      ]
    },
    // {
    //   title: 'Cart',
    //   name: 'cart',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference', of cartItems

    //     }
    //   ]
    // }
  ],
};