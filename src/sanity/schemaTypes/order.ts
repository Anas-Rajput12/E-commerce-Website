export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "customerName",
        title: "Customer Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "orderDate",
        title: "Order Date",
        type: "datetime",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "status",
        title: "Status",
        type: "string",
        options: {
          list: ["pending", "shipped", "delivered", "cancelled"],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "totalAmount",
        title: "Total Amount",
        type: "number",
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: "user",
        title: "User",
        type: "reference",
        to: [{ type: "user" }],
        description: "Reference to the user who placed the order",
      },
    ],
  };
  