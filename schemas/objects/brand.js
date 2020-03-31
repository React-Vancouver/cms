export default {
  title: 'Brand',
  name: 'brand',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Brand',
      name: 'brandName',
      type: 'string',
      description:
        'Choose one of the available logos. Need a different logo? Ask a developer to implement it here: "React-Vancouver/website/src/components/constructs/BrandLogo"',
      options: {
        list: ['react', 'slack', 'meetup'],
      },
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
