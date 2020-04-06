export default {
  title: 'Talk',
  name: 'talk',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'url' }],
    },
  ],
};
