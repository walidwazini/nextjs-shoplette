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
      name: 'defaultAddress',
      title: 'Default Address',
      type: 'object',
      fields: [
        {
          title: 'Address Key',
          name: 'refKey',
          type: 'string'
        },
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
    },
    {
      name: 'addresses',
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
    {
      title: 'Cart',
      name: 'cart',
      type: 'object',
      fields: [
        {
          title: 'Cart Items',
          name: 'items',
          type: 'array',
          of: [
            {
              name: 'cartItem',
              type: 'object',
              fields: [
                {
                  name: 'product',
                  type: 'reference',
                  to: [{ type: 'product' }]
                },
                {
                  title: 'quantity',
                  name: 'quantity',
                  type: 'number',
                },
              ]
            }
          ]
        },

        { name: 'totalProduct', type: 'number' },
        { name: 'totalAmount', type: 'number' },
      ],

    }
  ],
};