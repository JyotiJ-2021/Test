export default {
  name: "categorylist",
  title: "Category List",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",

      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of category",
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
  ],
};
