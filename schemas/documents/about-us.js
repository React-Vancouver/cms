export default {
  title: 'About Us',
  name: 'aboutUs',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Text',
      name: 'text',
      type: 'simplePortableText',
    },
  ],
};
