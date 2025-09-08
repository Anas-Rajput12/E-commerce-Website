export default {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule : any) => Rule.required().min(3).error("A name of at least 3 characters is required."),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule : any) => Rule.required().min(10).error("A description of at least 10 characters is required."),
      },
      {
        name: "status",
        title: "Status",
        type: "string",
        options: {
          list: [
            { title: "Active", value: "active" },
            { title: "Inactive", value: "inactive" },
          ],
          layout: "radio", // You can also use "dropdown" for a select input
        },
        validation: (Rule : any) => Rule.required().error("Status is required."),
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // Enables cropping and hotspot selection
        },
        fields: [
          {
            name: "alt",
            title: "Alternative Text",
            type: "string",
            description: "Describe the image for accessibility and SEO purposes.",
          },
        ],
      },
    ],
  };
  
