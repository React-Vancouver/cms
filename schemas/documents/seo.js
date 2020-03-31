export default {
  title: 'SEO',
  name: 'seo',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(70),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: (Rule) => Rule.required().min(100).max(160),
    },
    {
      title: 'Banner',
      name: 'banner',
      type: 'figure',
    },
  ],
  preview: {
    select: {},
    prepare: () => ({ title: 'SEO' }),
  },
};
