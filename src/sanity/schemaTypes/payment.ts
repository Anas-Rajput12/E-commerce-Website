import { Rule } from 'sanity';

interface Document {
  paymentMethod?: string;
}

const paymentSchema = {
  name: 'payment',
  title: 'Payment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Name is required'), // Ensure name is provided
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required()
          .email()
          .error('A valid email address is required'), // Validate email format
    },
    {
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required()
          .regex(/^\+?[0-9]{7,15}$/, {
            name: 'phone',
            invert: false,
          })
          .error('Contact number must be 7-15 digits and may start with a "+"'),
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: [
          { title: 'Offline', value: 'offline' },
          { title: 'Online', value: 'online' },
        ],
      },
      validation: (Rule: Rule) =>
        Rule.required().error('Payment method must be selected'),
    },
    {
      name: 'cardNumber',
      title: 'Card Number',
      type: 'string',
      hidden: ({ document }: { document: Document }) => document?.paymentMethod !== 'online', // Only visible if online payment is selected
      validation: (Rule: Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.paymentMethod === 'online' && !value) {
            return 'Card number is required for online payments';
          }
          return true;
        }),
    },
    {
      name: 'jazzCashNumber',
      title: 'JazzCash Number',
      type: 'string',
      hidden: ({ document }: { document: Document }) => document?.paymentMethod !== 'online', // Only visible if online payment is selected
    },
    {
      name: 'easypaisaNumber',
      title: 'Easypaisa Number',
      type: 'string',
      hidden: ({ document }: { document: Document }) => document?.paymentMethod !== 'online', // Only visible if online payment is selected
    },
    {
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required()
          .positive()
          .precision(2)
          .error('Total price must be a positive number with up to two decimal places'),
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (Rule: Rule) =>
        Rule.required()
          .min(1)
          .error('At least one product must be selected'),
    },
  ],
};

export default paymentSchema;
