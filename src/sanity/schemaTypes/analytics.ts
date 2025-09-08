export default {
    name: "analytics",
    title: "Analytics",
    type: "document",
    fields: [
      {
        name: "date",
        title: "Date",
        type: "datetime",
        validation: (Rule : any) => Rule.required(),
      },
      {
        name: "revenue",
        title: "Revenue",
        type: "number",
        validation: (Rule : any) => Rule.required().min(0),
      },
      {
        name: "ordersCount",
        title: "Orders Count",
        type: "number",
        validation: (Rule : any) => Rule.required().min(0),
      },
      {
        name: "newUsers",
        title: "New Users",
        type: "number",
        validation: (Rule : any) => Rule.required().min(0),
      },
    ],
  };
  
