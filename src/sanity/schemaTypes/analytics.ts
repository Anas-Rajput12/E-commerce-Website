import { Rule as ValidationRule } from "sanity"; // ✅ Proper type import

const analytics = {
  name: "analytics",
  title: "Analytics",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "revenue",
      title: "Revenue",
      type: "number",
      validation: (Rule: ValidationRule) => Rule.required().min(0),
    },
    {
      name: "ordersCount",
      title: "Orders Count",
      type: "number",
      validation: (Rule: ValidationRule) => Rule.required().min(0),
    },
    {
      name: "newUsers",
      title: "New Users",
      type: "number",
      validation: (Rule: ValidationRule) => Rule.required().min(0),
    },
  ],
};

export default analytics; // ✅ No anonymous export
