export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Url',
      name: 'url',
      type: 'url',
      description:
        '(1) External links: full url including ‘http’ or (2) internal route like ‘/speakers’',
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    },
  ],
};
