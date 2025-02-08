export default {
  name: "user",
  type: "document",
  title: "User",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Full Name",
    },
    {
      name: "email",
      type: "string",
      title: "Email Address",
    },
    {
      name: "address",
      type: "text",
      title: "Shipping Address",
    },
    {
      name: "password",
      type: "string", // You can also use `password` plugin for secure fields
      title: "Password",
    },
    {
      name: "payment",
      type: "object",
      title: "Payment Details",
      fields: [
        { name: "amount", type: "number", title: "Amount" },
        { name: "currency", type: "string", title: "Currency" },
        { name: "status", type: "string", title: "Payment Status" },
      ],
    },
  ],
};
